import axios from 'axios';
import cookie from 'react-cookie';
import * as types from './actionTypes';

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
  const user = cookie.load('user');
  axios.get(`/user/${user._id}`, {
    headers: { 'Authorization': cookie.load('token') }
  })
    .then(res => dispatch(fetchUserSuccess(res.data)))
    .catch(err => dispatch(fetchUserFailure(err)));
};
