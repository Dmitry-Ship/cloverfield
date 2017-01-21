import axios from 'axios';
import cookie from 'react-cookie';

import * as types from './actionTypes';

const loginSuccess = user => ({
  type: types.LOG_IN_SUCCESS,
  user,
});

const loginFailure = error => ({
  type: types.LOG_IN_FAILURE,
  error,
});

export const login = data => (dispatch) => {
  dispatch({ type: types.LOG_IN });
  axios.post('/login', data)
    .then((res) => {
      dispatch(loginSuccess(res.data));
      cookie.save('token', res.data.token, { path: '/' });
      cookie.save('user', res.data.user, { path: '/' });
      window.location.href = '/';
    })
    .catch(err => dispatch(loginFailure(err)));
};

const signUpSuccess = user => ({
  type: types.SIGN_UP_SUCCESS,
  user,
});

const signUpFailure = error => ({
  type: types.SIGN_UP_FAILURE,
  error,
});

export const signUp = data => (dispatch) => {
  dispatch({ type: types.SIGN_UP });
  axios.post('/signup', data)
    .then((res) => {
      dispatch(signUpSuccess(res.data));
      cookie.save('token', res.data.token, { path: '/' });
      cookie.save('user', res.data.user, { path: '/' });
      window.location.href = '/';
    })
    .catch(err => dispatch(signUpFailure(err.response.data)));
};

export const logout = () => (dispatch) => {
  dispatch({ type: types.LOG_OUT_SUCCESS });
  cookie.remove('token', { path: '/' });
  cookie.remove('user', { path: '/' });
  window.location.href = '/#/login';
};
