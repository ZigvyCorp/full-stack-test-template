import { filter } from 'lodash';

export const initialState = {
  data: [],
  isFetching: false,
  error: null,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COMMENTS_FETCH_REQUESTED':
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case 'COMMENTS_FETCH_FAILED':
      return {
        isFetching: false,
        error: action.message,
      };
    case 'COMMENTS_FETCH_SUCCEEDED':
      return {
        ...state,
        data: action.data,
        error: null,
        isFetching: false,
      };

    case 'COMMENTS_REMOVE_REQUESTED':
      const { index } = action;
      const { data } = state;
      console.log('index: ', index);
      const newData = filter(data, (n, i) => { return i !== parseInt(index, 10) });
      return {
        ...state,
        data: newData
      };

    default:
      return state;
  }
};

export default commentsReducer;
