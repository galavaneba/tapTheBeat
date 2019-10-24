/* eslint no-underscore-dangle: 0 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loadState } from './utils/localStorage';
import appReducer from './reducers.ts';

const persistedState = loadState();

export default (initialState) => {
  const middlewares = [
    thunkMiddleware,
  ];

  const devtools = typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

  const composeEnhancers = devtools || compose;

  return createStore(
    appReducer,
    initialState || persistedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
};
