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

    default:
      return state;
  }
};

export default commentsReducer;
