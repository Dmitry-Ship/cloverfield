import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

const byId = (state = {}, action) => {
  const { type, updatedNote, newNote, id, notes } = action;
  switch (type) {
    case types.FETCH_NOTES_SUCCESS: {
      const nextState = Object.assign({}, state);
      notes.forEach((note) => {
        nextState[note._id] = note;
      });
      return nextState;
    }
    case types.CREATE_NOTE_SUCCESS:
      return { ...state, [newNote._id]: newNote };
    case types.DELETE_NOTE_SUCCESS: {
      const newState = Object.assign({}, state);
      delete newState[id];
      return newState;
    }
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
}

const note = (state = { images: [], tags: [] }, action) => {
  switch (action.type) {
    case types.FETCH_NOTE_SUCCESS:
      return action.note;
    default: return state;
  }
};




export const getAllNotes = state => state.noteReducer.allIds.map(id => state.noteReducer.byId[id]);


export const getAllTags = (state) => {
  const allTheNotes = getAllNotes(state);
  const tagsArr = allTheNotes.map(note => note.tags);
  const newArr = [].concat(...tagsArr);
  const uniq = a => [...new Set(a)];

  return uniq(newArr);
};

export const getTagsSuggestions = (state, ownTags = '') => {
  const allTags = getAllTags(state);
  return allTags.filter(tag => !ownTags.includes(tag));
};

export const getAllImages = (state) => {
  const allTheNotes = getAllNotes(state);
  const tagsArr = allTheNotes.map(note => note.images);
  const newArr = [].concat(...tagsArr);

  return newArr;
};

export const getQuery = state => state.noteReducer.query;
const getLoadedNote = state => state.noteReducer.note;
export const getNote = (state, noteId) => {
  // return state.noteReducer.byId[noteId];
  if (state.noteReducer.byId[noteId]) {
    return state.noteReducer.byId[noteId];
  } else {
    return getLoadedNote(state);
  }
};


export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
export const getVisibleNotes = (state, tagText, color, images, query) => {
  const allTheNotes = getAllNotes(state).reverse();

  if (tagText) { return allTheNotes.filter(note => note.tags.includes(tagText)); }

  if (color) { return allTheNotes.filter(note => note.color === color); }

  if (images) { return allTheNotes.filter(note => note.images.length > 0); }

  if (query) {
    function checkTags(note, query) {
      for (let i = 0; i < note.tags.length; i++) {
        if (note.tags[i].toLowerCase().includes(query)) {
          return true;
        }
      }
      return false;
    }
    const result = allTheNotes.filter(note =>
      note.body.toLowerCase().includes(query.toLowerCase()) || note.title.toLowerCase().includes(query.toLowerCase()) || checkTags(note, query.toLowerCase()));
    return result;
  }

  return allTheNotes;
};

export default combineReducers({ isFetching, errorMessage, byId, allIds, note, isFetchingNote });
