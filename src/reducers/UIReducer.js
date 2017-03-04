import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

const image = (state = '', action) => {
  switch (action.type) {
    case types.EXPAND_IMAGE_SUCCESS:
      return action.image;
    case types.HIDE_IMAGE_SUCCESS:
      return '';
    default: return state;
  }
};

export const getImage = store => store.UIReducer.image;

export default combineReducers({ image });
