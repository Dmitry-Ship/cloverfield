import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  user: {},
  errorMessage: null,
};

const userReducer = (state = initialState, action) => {
  const { type, user, error } = action;
  switch (type) {
    case types.FETCH_USER:
      return Object.assign({}, state, { isFetching: true });
    case types.FETCH_USER_SUCCESS:
      return Object.assign({}, state, { user, isFetching: false, errorMessage: null });
    case types.FETCH_USER_FAILURE:
      return Object.assign({}, state, { isFetching: false, errorMessage: error });
    default: return state;
  }
};

export const getUser = state => state.userReducer.user;

export default userReducer;
