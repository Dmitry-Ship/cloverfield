import * as types from './actionTypes';

export const expandImage = (images, index) => ({
  type: types.EXPAND_IMAGE_SUCCESS,
  images,
  index,
});

export const hideImage = () => ({
  type: types.HIDE_IMAGE_SUCCESS,
});

export const nextImage = () => ({
  type: types.NEXT_IMAGE_SUCCESS,
});

export const previousImage = () => ({
  type: types.PREVIOUS_IMAGE_SUCCESS,
});
