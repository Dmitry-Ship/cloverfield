import * as types from 'constants/actionTypes';

const initialState = {
  isFetching: false,
  user: {},
  errorMessage: {},
  isPasswordChanged: false,
  isUpdating: false,
};

const userReducer = (state = initialState, action) => {
  const { type, data, error } = action;
  switch (type) {
    case types.FETCH_USER:
      return { ...state, isFetching: true };
    case types.FETCH_USER_SUCCESS:
      return { ...state, user: data.user, isFetching: false, errorMessage: {} };
    case types.FETCH_USER_FAILURE:
      return { ...state, isFetching: false, errorMessage: error };
    case types.EDIT_PROFILE:
    case types.CHANGE_PASSWORD:
      return { ...state, isUpdating: true };
    case types.EDIT_PROFILE_SUCCESS:
      return { ...state, user: data.user, isUpdating: false };
    case types.CHANGE_PASSWORD_SUCCESS:
      return { ...state, isPasswordChanged: true, isUpdating: false };
    case types.EDIT_PROFILE_FAILURE:
    case types.CHANGE_PASSWORD_FAILURE:
      return { ...state, errorMessage: error, isUpdating: false };
    default: return state;
  }
};


export default userReducer;
