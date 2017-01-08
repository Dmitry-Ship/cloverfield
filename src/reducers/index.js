import { combineReducers } from 'redux';

import noteReducer from './noteReducer';
import authentificationReducer from './authentificationReducer';

export default combineReducers({ noteReducer, authentificationReducer });
