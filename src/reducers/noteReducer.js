import { combineReducers } from 'redux';
import * as types from 'constants/actionTypes';

const byId = (state = {}, action) => {
  const { type, updatedNote, newNote, id, notes, prop, value, optID } = action;
  switch (type) {
    case types.FETCH_NOTES_SUCCESS: {
      const notesMap = {};
      notes.forEach((note) => {
        notesMap[note._id] = note;
      });
      return { ...state, ...notesMap };
    }
    case types.CREATE_NOTE_SUCCESS:
      return { ...state, [newNote._id]: newNote };
    case types.DELETE_NOTE_SUCCESS: {
      const newState = Object.assign({}, state);
      delete newState[id];
      return newState;
    }

    // optimistic update
    case types.EDIT_NOTE:
      return { ...state, [optID]: { ...state[optID], [prop]: value } };
    // optimistic update
    case types.EDIT_NOTE_SUCCESS:
    case types.ADD_TAG_SUCCESS:
    case types.ADD_IMAGE_SUCCESS:
    case types.DELETE_TAG_SUCCESS:
    case types.DELETE_IMAGE_SUCCESS:
      return { ...state, [updatedNote._id]: updatedNote };
    default: return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_NOTES_SUCCESS:
      return action.notes.map(note => note._id);
    case types.CREATE_NOTE_SUCCESS:
      return [...state, action.newNote._id];
    case types.DELETE_NOTE_SUCCESS:
      return state.filter(note => note !== action.id);
    default: return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_NOTES:
      return true;
    case types.FETCH_NOTES_SUCCESS:
    case types.FETCH_NOTES_FAILURE:
      return false;
    default: return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_NOTES_FAILURE:
    case types.ADD_TAG_FAILURE:
    case types.DELETE_TAG_FAILURE:
    case types.ADD_IMAGE_FAILURE:
    case types.DELETE_IMAGE_FAILURE:
    case types.EDIT_NOTE_FAILURE:
    case types.DELETE_NOTE_FAILURE:
    case types.CREATE_NOTE_FAILURE:
      return action.error;
    default: return state;
  }
};

const isFetchingNote = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_NOTE:
      return true;
    case types.FETCH_NOTE_SUCCESS:
      return false;
    default: return state;
  }
};

const note = (state = { images: [], tags: [] }, action) => {
  switch (action.type) {
    case types.FETCH_NOTE_SUCCESS:
      return action.note;
    default: return state;
  }
};


export default combineReducers({ isFetching, errorMessage, byId, allIds, note, isFetchingNote });
