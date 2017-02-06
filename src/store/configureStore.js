import { createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middleware = applyMiddleware(logger(), thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = initialState =>
createStore(rootReducer, initialState, composeEnhancers(middleware));

export default configureStore;
