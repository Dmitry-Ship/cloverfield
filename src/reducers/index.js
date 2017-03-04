import { combineReducers } from 'redux';

import noteReducer from './noteReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import UIReducer from './UIReducer';

export default combineReducers({ noteReducer, authReducer, userReducer, UIReducer });
