import * as types from '../actions/actionTypes';

const initialState = {
  uloading: false,
  image: {},
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, image, error } = action;
  switch (type) {
    case types.UPLOAD_IMAGE:
      return { ...state, uploading: true };
    case types.UPLOAD_IMAGE_SUCCESS:
      return { ...state, image, uploading: false };
    case types.UPLOAD_IMAGE_FAILURE:
      return { ...state, uploading: false, error };
    default: return state;
  }
};

export default userReducer;
