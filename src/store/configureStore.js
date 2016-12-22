import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const middleware = applyMiddleware(logger(), thunk);

const configureStore = (initialState) => {
  return createStore(reducer, initialState, middleware);
};

export default configureStore;
