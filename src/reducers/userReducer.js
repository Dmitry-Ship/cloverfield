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
      return Object.assign({}, state, { fetching: true });
    case types.FETCH_USER_SUCCESS:
      return Object.assign({}, state, { user, fetching: false });
    case types.FETCH_USER_FAILURE:
      return Object.assign({}, state, { fetching: false, error });
    default: return state;
  }
};

export default userReducer;
