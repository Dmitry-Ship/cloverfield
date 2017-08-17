import axios from 'axios';
import * as types from 'constants/actionTypes';

import { loginURL, signUpURL, forgotPasswordURL, resetPasswordURL } from '../../config/urls';

const loginSuccess = token => ({
  type: types.LOG_IN_SUCCESS,
  token,
});

const loginFailure = error => ({
  type: types.LOG_IN_FAILURE,
  error,
});

export const login = (creds, cb) => (dispatch) => {
  dispatch({ type: types.LOG_IN });
  axios.post(loginURL, creds)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      dispatch(loginSuccess(res.data));
      dispatch({ type: types.CLOSE_MODAL_SUCCESS });
      cb();
    })
    .catch(err => dispatch(loginFailure(err.response.data)));
};

const signUpSuccess = token => ({
  type: types.SIGN_UP_SUCCESS,
  token,
});
const signUpFailure = error => ({
  type: types.SIGN_UP_FAILURE,
  error,
});

export const signUp = (creds, cb) => (dispatch) => {
  dispatch({ type: types.SIGN_UP });
  axios.post(signUpURL, creds)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      dispatch(signUpSuccess(res.data));
      dispatch({ type: types.CLOSE_MODAL_SUCCESS });
      cb();
    })
    .catch(err => dispatch(signUpFailure(err.response.data)));
};

export const logout = cb => (dispatch) => {
  dispatch({ type: types.LOG_OUT_SUCCESS });
  localStorage.removeItem('token');
  cb();
};

const requestTokenSuccess = () => ({
  type: types.REQUEST_TOKEN_SUCCESS,
});

const requestTokenFailure = error => ({
  type: types.REQUEST_TOKEN_FAILURE,
  error,
});

export const requestToken = creds => (dispatch) => {
  dispatch({ type: types.REQUEST_TOKEN });
  axios.post(forgotPasswordURL, creds)
    .then((res) => {
      dispatch(requestTokenSuccess(res.data));
    })
    .catch(err => dispatch(requestTokenFailure(err.response.data)));
};

const resetPasswordSuccess = () => ({
  type: types.RESET_PASSWORD_SUCCESS,
});

const resetPasswordFailure = error => ({
  type: types.RESET_PASSWORD_FAILURE,
  error,
});

export const resetPassword = (creds, token) => (dispatch) => {
  dispatch({ type: types.RESET_PASSWORD });
  axios.put(`${resetPasswordURL}/${token}`, creds)
    .then((res) => {
      dispatch(resetPasswordSuccess(res.data));
    })
    .catch(err => dispatch(resetPasswordFailure(err.response.data)));
};


const verifyTokenSuccess = () => ({
  type: types.VERIFY_TOKEN_SUCCESS,
});

const verifyTokenFailure = error => ({
  type: types.VERIFY_TOKEN_FAILURE,
  error,
});

export const verifyToken = token => (dispatch) => {
  dispatch({ type: types.VERIFY_TOKEN });
  axios.get(`${resetPasswordURL}/${token}`)
    .then((res) => {
      dispatch(verifyTokenSuccess(res.data));
    })
    .catch(err => dispatch(verifyTokenFailure(err.response.data)));
};
