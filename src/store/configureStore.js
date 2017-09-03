import { createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import callAPIMiddleware from 'middleware/callAPI';
import rootReducer from 'reducers/index';

const middleware = applyMiddleware(thunk, logger(), callAPIMiddleware());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = initialState =>
  createStore(rootReducer, initialState, composeEnhancers(middleware));

export default configureStore;
