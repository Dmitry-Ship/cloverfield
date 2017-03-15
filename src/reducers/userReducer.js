import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  user: {},
  errorMessage: {},
  isPasswordChanged: false,
  getIsLoading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, user, error } = action;
  switch (type) {
    case types.FETCH_USER:
      return Object.assign({}, state, { isFetching: true });
    case types.FETCH_USER_SUCCESS:
      return Object.assign({}, state, { user, isFetching: false, errorMessage: {} });
    case types.FETCH_USER_FAILURE:
      return Object.assign({}, state, { isFetching: false, errorMessage: error });
    case types.EDIT_PROFILE:
    case types.CHANGE_PASSWORD:
      return Object.assign({}, state, { isLoading: true });
    case types.EDIT_PROFILE_SUCCESS:
      return Object.assign({}, state, { user, isLoading: false });
    case types.CHANGE_PASSWORD_SUCCESS:
      return Object.assign({}, state, { isPasswordChanged: true, isLoading: false });
    case types.EDIT_PROFILE_FAILURE:
    case types.CHANGE_PASSWORD_FAILURE:
      return Object.assign({}, state, { errorMessage: error, isLoading: false });
    default: return state;
  }
};

export const getUser = state => state.userReducer.user;
export const getErrorMessage = state => state.userReducer.errorMessage;
export const getIsPasswordChanged = state => state.userReducer.isPasswordChanged;
export const getIsLoading = state => state.userReducer.isLoading;

export default userReducer;
