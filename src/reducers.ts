import { combineReducers } from 'redux';
import { results } from './reducers/results';
import { users } from './reducers/user';
import { fetchText } from './reducers/withFakeAsync';

export default combineReducers({
  results,
  users,
  fetchText,
});
