import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

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

export const getModal = store => store.UIReducer.modal;
export const getImages = store => store.UIReducer.lightBox.images;
export const getImageIndex = store => store.UIReducer.lightBox.index;


export default combineReducers({ modal, lightBox });
