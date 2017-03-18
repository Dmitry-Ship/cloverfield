import * as types from './actionTypes';

export const expandImage = (images, index) => ({
  type: types.EXPAND_IMAGE_SUCCESS,
  images,
  index,
});

export const hideImage = () => ({
  type: types.HIDE_IMAGE_SUCCESS,
});

export const showNextImage = () => ({
  type: types.NEXT_IMAGE_SUCCESS,
});

export const showPreviousImage = () => ({
  type: types.PREVIOUS_IMAGE_SUCCESS,
});

export const openModal = content => ({
  type: types.OPEN_MODAL_SUCCESS,
  content,
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL_SUCCESS,
});

