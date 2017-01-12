import { combineReducers } from 'redux';

import noteReducer from './noteReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

export default combineReducers({ noteReducer, authReducer, userReducer });
