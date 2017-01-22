import axios from 'axios';

import * as types from './actionTypes';
import token from '../../helpers/token';

const fetchUserSuccess = user => ({
  type: types.FETCH_USER_SUCCESS,
  user,
});

const fetchUserFailure = error => ({
  type: types.FETCH_USER_FAILURE,
  error,
});

export const fetchUser = () => (dispatch) => {
  dispatch({ type: types.FETCH_USER });
  axios.get('/user', token)
    .then(res => dispatch(fetchUserSuccess(res.data)))
    .catch(err => dispatch(fetchUserFailure(err.response.data)));
};
