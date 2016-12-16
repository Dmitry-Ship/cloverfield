import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import promise from 'redux-promise-middleware';

import noteReducer from './reducers/noteReducer';

export default createStore(
  combineReducers({ noteReducer }),
  {},
  applyMiddleware(logger(), promise()));
