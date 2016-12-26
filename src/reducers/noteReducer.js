import * as types from '../actions/actionTypes';

const Note = (state = {}, action) => {
  const { type, newNote, error, note } = action;
  switch (type) {
    case types.CREATE_NOTE_SUCCESS:
      return {
        _id: newNote._id,
        title: newNote.title,
        content: newNote.content,
        color: newNote.color,
        tags: newNote.tags,
      };
    case types.CREATE_NOTE_FAILURE:
      return { ...state, error };
    case types.CHANGE_TITLE:
      return state;
    case types.CHANGE_TITLE_SUCCESS:
      if (state._id === note._id) {
        return { ...state, title: note.title };
      }
      return state;
    case types.CHANGE_TITLE_FAILURE:
      return { ...state, error };
    case types.CHANGE_CONTENT:
      return state;
    case types.CHANGE_CONTENT_SUCCESS:
      if (state._id === note._id) {
        return { ...state, content: note.content };
      }
      return state;
    case types.CHANGE_CONTENT_FAILURE:
      return { ...state, error };
    case types.CHANGE_COLOR:
      return state;
    case types.CHANGE_COLOR_SUCCESS:
      if (state._id === note._id) {
        return { ...state, color: note.color };
      }
      return state;
    case types.CHANGE_COLOR_FAILURE:
      return { ...state, error };

    case types.ADD_TAG:
      return state;
    case types.ADD_TAG_SUCCESS:
      if (state._id === note._id) {
        return { ...state, tags: note.tags };
      }
      return state;
    case types.ADD_TAG_FAILURE:
      return { ...state, error };
    case types.DELETE_TAG:
      return state;
    case types.DELETE_TAG_SUCCESS:
      if (state._id === note._id) {
        return { ...state, tags: note.tags };
      }
      return state;
    case types.DELETE_TAG_FAILURE:
      return { ...state, error };
    default: return state;
  }
};

const noteReducer = (state = [], action) => {
  const { type, notes, id, error } = action;
  switch (type) {
    case types.FETCH_NOTES:
      return state;
    case types.FETCH_NOTES_SUCCESS:
      return notes;
    case types.FETCH_NOTES_FAILURE:
      return state;
    case types.CREATE_NOTE:
      return state;
    case types.CREATE_NOTE_SUCCESS:
      return [...state, Note(undefined, action)];
    case types.DELETE_NOTE:
      return state;
    case types.DELETE_NOTE_SUCCESS:
      return state.filter(item => item._id !== id);
    case types.DELETE_NOTE_FAILURE:
      return { ...state, error };

    case types.CHANGE_COLOR_SUCCESS:
    case types.CHANGE_TITLE_SUCCESS:
    case types.CHANGE_CONTENT_SUCCESS:
    case types.ADD_TAG_SUCCESS:
    case types.DELETE_TAG_SUCCESS:
      return state.map(item => Note(item, action));
    default: return state;
  }
};

export default noteReducer;
