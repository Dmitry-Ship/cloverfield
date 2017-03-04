import * as types from './actionTypes';

export const expandImage = image => ({
  type: types.EXPAND_IMAGE_SUCCESS,
  image,
});

export const hideImage = () => ({
  type: types.HIDE_IMAGE_SUCCESS,
});
