import * as types from 'constants/actionTypes';

import { userURL, userPasswordURL } from '../../config/urls';

export const fetchUser = () => (dispatch) => {
  dispatch({
    type: types.FETCH_USER,
    $fetch: userURL,
  });
};

export const editProfile = data => (dispatch) => {
  dispatch({
    type: types.EDIT_PROFILE,
    $fetch: [userURL, {
      method: 'PUT',
      body: data,
    }],
  });
};

export const changePassword = data => (dispatch) => {
  dispatch({
    type: types.CHANGE_PASSWORD,
    $fetch: [userPasswordURL, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }],
  });
};
