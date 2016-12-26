import { createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const middleware = applyMiddleware(logger(), thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState) => {
  return createStore(reducer, initialState, composeEnhancers(
    middleware));
};

export default configureStore;
