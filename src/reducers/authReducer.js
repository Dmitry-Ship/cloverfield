import cookie from 'react-cookie';
import * as types from '../actions/actionTypes';

const initialState = {
  loggingIn: false,
  isLoggedIn: cookie.load('token') ? true : false,
  error: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, error, user } = action;
  switch (type) {
    case types.LOG_IN:
    case types.SIGN_UP:
      return { ...state, loggingIn: true };
    case types.LOG_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
      return { ...state, loggingIn: false, isLoggedIn: true, user };
    case types.LOG_IN_FAILURE:
    case types.SIGN_UP_FAILURE:
      return { ...state, loggingIn: false, error };
    case types.LOG_OUT_SUCCESS:
      return { ...state, isLoggedIn: false };
    default: return state;
  }
};

export default authReducer;