import { combineReducers } from 'redux';

import * as types from 'constants/actionTypes';

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

const isLoggedIn = (state = !!localStorage.getItem('token'), action) => {
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
    case types.REQUEST_TOKEN_FAILURE:
    case types.RESET_PASSWORD_FAILURE:
      return action.error;
    case types.LOG_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
    case types.REQUEST_TOKEN_SUCCESS:
    case types.LOG_IN:
    case types.SIGN_UP:
    case types.REQUEST_TOKEN:
      return {};
    default: return state;
  }
};

const isTokenSent = (state = false, action) => {
  switch (action.type) {
    case types.REQUEST_TOKEN_FAILURE:
      return false;
    case types.REQUEST_TOKEN_SUCCESS:
      return true;
    default: return state;
  }
};

const isPasswordUpdated = (state = false, action) => {
  switch (action.type) {
    case types.RESET_PASSWORD_FAILURE:
      return false;
    case types.RESET_PASSWORD_SUCCESS:
      return true;
    default: return state;
  }
};

const isTokenExpired = (state = false, action) => {
  switch (action.type) {
    case types.VERIFY_TOKEN_FAILURE:
      return true;
    case types.VERIFY_TOKEN_SUCCESS:
      return false;
    default: return state;
  }
};

export default combineReducers({ errorMessage, isLoggedIn, isLoggingIn, isTokenSent, isPasswordUpdated, isTokenExpired });
