import axios from 'axios';

import * as types from './actionTypes';
import setAuthHeader from '../../helpers/setAuthHeader';

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
  axios.get('/api/user', setAuthHeader())
    .then(res => dispatch(fetchUserSuccess(res.data)))
    .catch(err => dispatch(fetchUserFailure(err.response.data)));
};

const editProfileSuccess = user => ({
  type: types.EDIT_PROFILE_SUCCESS,
  user,
});

const editProfileFailure = error => ({
  type: types.EDIT_PROFILE_FAILURE,
  error,
});

export const editProfile = data => (dispatch) => {
  dispatch({ type: types.EDIT_PROFILE });
  axios.put('/api/user', data, setAuthHeader())
    .then(res => dispatch(editProfileSuccess(res.data)))
    .catch(err => dispatch(editProfileFailure(err.response.data)));
};
