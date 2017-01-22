import axios from 'axios';
import * as types from './actionTypes';

import token from '../../helpers/token';

const url = '/image';

const uploadImageSuccess = image => ({
  type: types.UPLOAD_IMAGE_SUCCESS,
  image,
});

const uploadImageFailure = error => ({
  type: types.UPLOAD_IMAGE_FAILURE,
  error,
});

export const uploadImage = image => (dispatch) => {
  dispatch({ type: types.UPLOAD_IMAGE });
  console.log(image);
  axios.post(url, image, token)
    .then(res => dispatch(uploadImageSuccess(res.data)))
    .catch(err => dispatch(uploadImageFailure(err.response.data)));
};
