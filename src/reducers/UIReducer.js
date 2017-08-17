import { combineReducers } from 'redux';
import * as types from 'constants/actionTypes';

const modal = (state = null, action) => {
  switch (action.type) {
    case types.OPEN_MODAL_SUCCESS:
      return action.modal;
    case types.CLOSE_MODAL_SUCCESS:
      return null;
    default: return state;
  }
};

const lightBox = (state = { index: 0, images: [] }, action) => {
  switch (action.type) {
    case types.OPEN_LIGHTBOX_SUCCESS:
      return { ...state, images: action.images, index: action.index };
    case types.CLOSE_LIGHTBOX_SUCCESS:
      return { ...state, index: 0, images: [] };
    default: return state;
  }
};

const isFormExpanded = (state = false, action) => {
  switch (action.type) {
    case types.EXPAND_FORM_SUCCESS:
      return true;
    case types.CLOSE_FORM_SUCCESS:
      return false;
    default: return state;
  }
};

export const getModal = store => store.modal;
export const getImages = store => store.lightBox.images;
export const getImageIndex = store => store.lightBox.index;
export const getIsFormExpanded = store => store.isFormExpanded;

export default combineReducers({ modal, lightBox, isFormExpanded });
