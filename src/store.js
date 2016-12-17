import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(logger(), promise());
export default createStore(reducer, middleware);
