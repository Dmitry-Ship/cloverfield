import * as types from '../actions/actionTypes';

const initialState = {
  fetching: false,
  user: {},
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, user, error } = action;
  switch (type) {
    case types.FETCH_USER:
      return { ...state, fetching: true };
    case types.FETCH_USER_SUCCESS:
      return { ...state, user, fetching: false };
    case types.FETCH_USER_FAILURE:
      return { ...state, fetching: false, error };
    default: return state;
  }
};

export default userReducer;
