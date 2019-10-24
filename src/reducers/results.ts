import { SAVE_RESULT } from '../actions/actionTypes';

export const results = (state = [], action: { type: any; payload: any; } ) => {
  switch (action.type) {
    case SAVE_RESULT:
      return action.payload;
    default:
      return state;
  }
}
