import * as types from '../actions/actionTypes';

const initialState = {
  loggingIn: false,
  isLoggedIn: false,
  isLoggingOut: false,
  error: null,
};

const authentificationReducer = (state = initialState, action) => {
  const { type, error, data, user } = action;
  switch (type) {
    // case types.LOG_IN:
    //   return { ...state, loggingIn: true };
    // case types.LOG_IN_SUCCESS:
    //   window.location = user.redirect;
    //   return { ...state, loggingIn: false, isLoggedIn: true };
    // case types.LOG_IN_FAILURE:
    //   window.location = user.redirect;
    //   return { ...state, loggingIn: false, error };
    // case types.SIGN_UP:
    //   return { ...state, loggingIn: true };
    // case types.SIGN_UP_SUCCESS:
    //   window.location = user.redirect;
    //   return { ...state, loggingIn: false, isLoggedIn: true };
    // case types.SIGN_UP_FAILURE:
    //   window.location = user.redirect;
    //   return { ...state, loggingIn: false, error };

    case types.LOG_IN:
    case types.SIGN_UP:
      return { ...state, loggingIn: true };
    case types.LOG_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:

      return { ...state, loggingIn: false, isLoggedIn: true };
      // return window.location = user.redirect;
    case types.LOG_IN_FAILURE:
    case types.SIGN_UP_FAILURE:
      window.location = user.redirect;
      return { ...state, loggingIn: false, error };

    case types.LOG_OUT:
      return { ...state, loggingOut: true };
    case types.LOG_OUT_SUCCESS:
      window.location = user.redirect;
      return { ...state, loggingOut: false, isLoggedIn: false };
    case types.LOG_OUT_FAILURE:
      window.location = user.redirect;
      return { ...state, loggingOut: false, error };
    default: return state;
  }
};

export default authentificationReducer;
