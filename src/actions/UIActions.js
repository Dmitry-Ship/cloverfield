import * as types from './actionTypes';

export const openModal = modal => ({
  type: types.OPEN_MODAL_SUCCESS,
  modal,
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL_SUCCESS,
});

export const openLightBox = (images, index) => ({
  type: types.OPEN_LIGHTBOX_SUCCESS,
  images,
  index,
});

export const closeLightBox = () => ({
  type: types.CLOSE_LIGHTBOX_SUCCESS,
});

