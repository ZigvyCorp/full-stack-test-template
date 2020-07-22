import { combineReducers } from 'redux';

import commentsReducer from './comments';

export const allReducer = combineReducers({
  comments: commentsReducer,
});

export default allReducer
