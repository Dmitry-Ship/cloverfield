import axios from 'axios';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

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
      cookie.save('token', res.data.token, { path: '/' });
      dispatch(loginSuccess(res.data));
      browserHistory.push('/');
    })
    .catch(err => dispatch(loginFailure(err.response.data)));
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
      cookie.save('token', res.data.token, { path: '/' });
      dispatch(signUpSuccess(res.data));
      browserHistory.push('/');
    })
    .catch(err => dispatch(signUpFailure(err.response.data)));
};

export const logout = () => (dispatch) => {
  dispatch({ type: types.LOG_OUT_SUCCESS });
  cookie.remove('token', { path: '/' });
  browserHistory.push('/login');
};
