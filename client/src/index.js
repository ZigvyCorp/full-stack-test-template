import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
// import reduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

import App from './App'
import reducers from './reducers';
import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const middlewares = [reduxThunk]
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
// const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(...sagaMiddleware))
// );
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
