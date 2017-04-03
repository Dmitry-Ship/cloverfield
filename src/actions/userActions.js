import axios from 'axios';

import * as types from './actionTypes';
import setAuthHeader from '../../helpers/setAuthHeader';

import { userURL, userPasswordURL } from '../../config/urls';

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
  axios.get(userURL, setAuthHeader())
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
  axios.put(userURL, data, setAuthHeader())
    .then(res => dispatch(editProfileSuccess(res.data)))
    .catch(err => dispatch(editProfileFailure(err.response.data)));
};


const changePasswordSuccess = user => ({
  type: types.CHANGE_PASSWORD_SUCCESS,
  user,
});

const changePasswordFailure = error => ({
  type: types.CHANGE_PASSWORD_FAILURE,
  error,
});

export const changePassword = data => (dispatch) => {
  dispatch({ type: types.CHANGE_PASSWORD });
  axios.put(userPasswordURL, data, setAuthHeader())
    .then(res => dispatch(changePasswordSuccess(res.data)))
    .catch(err => dispatch(changePasswordFailure(err.response.data)));
};
