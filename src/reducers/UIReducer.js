import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

const modal = (state = { isOpen: false, content: null }, action) => {
  switch (action.type) {
    case types.OPEN_MODAL_SUCCESS:
      return { ...state, isOpen: true, content: action.content };
    case types.CLOSE_MODAL_SUCCESS:
      return { ...state, isOpen: false, content: null };
    default: return state;
  }
};

export const getIsOpen = store => store.UIReducer.modal.isOpen;
export const getContent = store => store.UIReducer.modal.content;

export default combineReducers({ modal });
