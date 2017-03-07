import axios from 'axios';
import { browserHistory } from 'react-router';

import * as types from './actionTypes';

const loginSuccess = token => ({
  type: types.LOG_IN_SUCCESS,
  token,
});

const loginFailure = error => ({
  type: types.LOG_IN_FAILURE,
  error,
});

export const login = creds => (dispatch) => {
  dispatch({ type: types.LOG_IN });
  axios.post('/api/login', creds)
    .then((res) => {
      document.cookie = `token=${res.data.token}; path=/`;
      dispatch(loginSuccess(res.data));
      browserHistory.push('/');
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

export const signUp = creds => (dispatch) => {
  dispatch({ type: types.SIGN_UP });
  axios.post('/api/signup', creds)
    .then((res) => {
      document.cookie = `token=${res.data.token}; path=/`;
      dispatch(signUpSuccess(res.data));
      browserHistory.push('/');
    })
    .catch(err => dispatch(signUpFailure(err.response.data)));
};

export const logout = () => (dispatch) => {
  dispatch({ type: types.LOG_OUT_SUCCESS });
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  browserHistory.push('/login');
};
