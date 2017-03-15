import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

const image = (state = { images: [], index: 0 }, action) => {
  switch (action.type) {
    case types.EXPAND_IMAGE_SUCCESS:
      return Object.assign({}, state, { index: action.index }, { images: action.images });
    case types.HIDE_IMAGE_SUCCESS:
      return { images: [], index: 0 };
    case types.NEXT_IMAGE_SUCCESS:
      return Object.assign({}, state, { index: state.index += 1 });
    case types.PREVIOUS_IMAGE_SUCCESS:
      return Object.assign({}, state, { index: state.index -= 1 });
    default: return state;
  }
};

export const getCurrentImage = store => store.UIReducer.image.images[store.UIReducer.image.index];
export const getIsLast = store => store.UIReducer.image.images.length === store.UIReducer.image.index+1;
export const getIsFirst = store => store.UIReducer.image.index === 0;

export default combineReducers({ image });
