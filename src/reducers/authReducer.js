import cookie from 'react-cookie';
import * as types from '../actions/actionTypes';

const initialState = {
  isLoggingIn: false,
  isLoggedIn: cookie.load('token') ? true : false,
  error: {},
};

const authReducer = (state = initialState, action) => {
  const { type, error } = action;
  switch (type) {
    case types.LOG_IN:
    case types.SIGN_UP:
      return Object.assign({}, state, { isLoggingIn: true });
    case types.LOG_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
      return Object.assign({}, state, { isLoggingIn: false, isLoggedIn: true });
    case types.LOG_IN_FAILURE:
    case types.SIGN_UP_FAILURE:
      return Object.assign({}, state, { isLoggingIn: false, error });
    case types.LOG_OUT_SUCCESS:
      return Object.assign({}, state, { isLoggedIn: false });
    default: return state;
  }
};

export default authReducer;
