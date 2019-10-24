import { UserState, ResultState } from '../models';
import * as types from './actionTypes';
import { Dispatch } from 'redux';
import createAction from './actionCreator';

export const saveResult = (result: ResultState) => {
  return {
    type: types.SAVE_RESULT,
    payload: result
  }
}

export const saveUser = (user: UserState) => {
  return {
    type: types.SAVE_USER,
    payload: user
  }
}

export const asyncRequest = createAction(types.ASYNC_REQUEST);
export const asyncSuccess = createAction(types.ASYNC_SUCCESS);
export const asyncFailure = createAction(types.ASYNC_FAILURE);

export const fakeCall = () => async (dispatch: Dispatch) => {  
  dispatch(asyncRequest());

  try {
    setTimeout(() => {
      console.log('Timeout runnign');
      dispatch(asyncSuccess());
    }, 1000);
  } catch(e) {
    dispatch(asyncFailure(e));
  }
}
