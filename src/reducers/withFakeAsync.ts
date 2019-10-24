import * as types from '../actions/actionTypes';

const InitialState = {
  text: '',
  isLoading: false,
  error: false
};

export const fetchText = (state = InitialState, action: { type: any; }) => {
  switch(action.type) {
    case types.ASYNC_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.ASYNC_SUCCESS:
      return {
        ...state,
        text: 'Success!',
        isLoading: false
    }
    case types.ASYNC_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
    }
    default:
      return state
  }
};