import cookie from 'react-cookie';
import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

const isLoggingIn = (state = false, action) => {
  switch (action.type) {
    case types.LOG_IN:
    case types.SIGN_UP:
      return true;
    case types.LOG_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
      return false;
    case types.LOG_IN_FAILURE:
    case types.SIGN_UP_FAILURE:
      return false;
    default: return state;
  }
};


const isLoggedIn = (state = !!cookie.load('token'), action) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
      return true;
    case types.LOG_OUT_SUCCESS:
      return false;
    default: return state;
  }
};

const errorMessage = (state = {}, action) => {
  switch (action.type) {
    case types.LOG_IN_FAILURE:
    case types.SIGN_UP_FAILURE:
      return action.error;
    case types.LOG_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
    case types.LOG_IN:
    case types.SIGN_UP:
      return {};
    default: return state;
  }
};

export const getErrorMessage = state => state.authReducer.errorMessage;
export const getIsLoggedIn = state => state.authReducer.isLoggedIn;

export default combineReducers({ errorMessage, isLoggedIn, isLoggingIn });
