import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

// const allNotes = (state = [], action) => {
//   const { type, newNote, updatedNote, notes, id } = action;
//   switch (type) {
//     case types.FETCH_NOTES_SUCCESS:
//       return notes;
//     case types.CREATE_NOTE_SUCCESS:
//       return [...state, newNote];
//     case types.DELETE_NOTE_SUCCESS:
//       return state.filter(item => item._id !== id);
//     case types.ADD_TAG:
//     case types.DELETE_TAG:
//     case types.ADD_IMAGE:
//     case types.DELETE_IMAGE:
//     case types.EDIT_NOTE:
//     case types.CREATE_NOTE:
//     case types.DELETE_NOTE:
//       return state;
//     case types.ADD_TAG_SUCCESS:
//     case types.DELETE_TAG_SUCCESS:
//     case types.ADD_IMAGE_SUCCESS:
//     case types.DELETE_IMAGE_SUCCESS:
//     case types.EDIT_NOTE_SUCCESS:
//       return state.map((note) => {
//         if (note._id === updatedNote._id) {
//           return Object.assign({}, note, updatedNote);
//         }
//         return note;
//       });
//     default: return state;
//   }
// };

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
      return Object.assign({},
        state,
        { [newNote._id]: newNote });
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
      return Object.assign({},
        state,
        { [updatedNote._id]: updatedNote });
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

const getAllNotes = state => state.noteReducer.allIds.map(id => state.noteReducer.byId[id]);

export const getAllTags = (state) => {
  const allTheNotes = getAllNotes(state);
  const tagsArr = allTheNotes.map(note => note.tags);
  const newArr = [].concat(...tagsArr);
  const uniq = a => [...new Set(a)];

  return uniq(newArr);
};

export const getTagsSuggestions = (state, ownTags = '') => {
  const allTags = getAllTags(state);
  const suggestions = allTags.filter((tag) => {
    return !ownTags.includes(tag);
  });
  return suggestions;
};


export const getAllImages = (state) => {
  const allTheNotes = getAllNotes(state);
  const tagsArr = allTheNotes.map(note => note.images);
  const newArr = [].concat(...tagsArr);

  return newArr;
};

export const getIsFetching = state => state.noteReducer.isFetching;
export const getErrorMessage = state => state.noteReducer.errorMessage;
export const getVisibleNotes = (state, tagText) => {
  const allTheNotes = getAllNotes(state);

  if (!tagText) {
    return allTheNotes;
  }
  return allTheNotes.filter(note => note.tags.includes(tagText));
};

export default combineReducers({ isFetching, errorMessage, byId, allIds });
