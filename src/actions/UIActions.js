import * as types from './actionTypes';

export const openModal = content => ({
  type: types.OPEN_MODAL_SUCCESS,
  content,
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL_SUCCESS,
});

