import { SAVE_USER } from '../actions/actionTypes';

interface IAppState {
  users: any[];
}

const initialState: IAppState = {
  users: []
};

export const users = (state = initialState, action: { type: any; payload: any; } ) => {
  switch (action.type) {
    case SAVE_USER:
      return Object.assign({}, state, {
        users: [
          ...state.users,
          action.payload
        ]
      })
    default:
      return state;
  }
}