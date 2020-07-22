import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchComment(action) {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/comments');
    if (response !== null) {
      const { data } = response;
      yield put({type: "COMMENTS_FETCH_SUCCEEDED", data });
    }
  } catch (e) {
    console.log(e);
    yield put({type: "COMMENTS_FETCH_FAILED", message: e.message});
  }
}

function* rootSaga() {
  yield takeLatest("COMMENTS_FETCH_REQUESTED", fetchComment);
}

export default rootSaga;
