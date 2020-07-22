const express = require('express')
const http = require('http')
const httpStatus = require('http-status')
const bodyParser = require('body-parser')
const path = require('path')
const axios = require('axios');

const app = express()
const httpServer = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Init API Routers
const router = express.Router();
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type,Authorization, Access-Control-Request-Method, Access-Control-Request-Headers',
    );
    next();
});

const fetchComment = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        if (response !== null && response.data !== null) {
            return res.status(httpStatus.OK).send(response.data);
        } else {
            return {
                message: 'Invalid request',
                status: httpStatus.BAD_REQUEST,
            };
        }

    } catch (error) {
        const status = error.status || httpStatus.INTERNAL_SERVER_ERROR;
        return res.status(status).send(error.message)
    }
};

const CommentsRouter = {
    router: express.Router()
};
CommentsRouter.router.get('/', fetchComment);
router.use('/comments', CommentsRouter.router);
app.use('/api', router);

httpServer.listen(process.env.PORT || 3001)
