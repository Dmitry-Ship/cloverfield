import * as types from '../actions/actionTypes';

const initialState = {
  fetching: false,
  notes: [],
  error: null,
};

const noteReducer = (state = initialState, action) => {
  const { type, newNote, error, updatedNote, notes, id, prop } = action;
  switch (type) {
    case types.FETCH_NOTES:
      return { ...state, fetching: true };
    case types.FETCH_NOTES_SUCCESS:
      return { ...state, notes, fetching: false };
    case types.FETCH_NOTES_FAILURE:
      return { ...state, fetching: false, error };
    case types.CREATE_NOTE:
      return state;
    case types.CREATE_NOTE_SUCCESS:
      return { ...state, notes: [...state.notes, newNote] };
    case types.CREATE_NOTE_FAILURE:
      return { ...state, error };
    case types.DELETE_NOTE:
      return state;
    case types.DELETE_NOTE_SUCCESS:
      return { ...state, notes: state.notes.filter(item => item._id !== id) };
    case types.DELETE_NOTE_FAILURE:
      return { ...state, error };
    case types.EDIT_TAGS:
    case types.EDIT_NOTE:
      return state;
    case types.EDIT_TAGS_SUCCESS:
    case types.EDIT_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.map(note => note._id === updatedNote._id
                                        ? { ...note, [prop]: updatedNote[prop] }
                                        : note),
      };
    case types.EDIT_TAGS_FAILURE:
    case types.EDIT_NOTE_FAILURE:
      return { ...state, error };
    default: return state;
  }
};

export default noteReducer;
