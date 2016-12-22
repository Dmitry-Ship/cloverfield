import * as types from '../actions/actionTypes';

const initialState = {
  fetching: false,
  fetched: false,
  notes: [],
  error: null,
};

const noteReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_NOTES:
      return { ...state, fetching: true };
    case types.FETCH_NOTES_SUCCESS:
      return { ...state, notes: payload, fetched: true, fetching: false };
    case types.FETCH_NOTES_FAILURE:
      return { ...state, fetched: false, fetching: false, error: payload };
    case types.CREATE_NOTE:
      return state;
    case types.CREATE_NOTE_SUCCESS:
      return { ...state, notes: state.notes.concat([payload]) };
    case types.CREATE_NOTE_FAILURE:
      return { ...state, error: payload };
    case types.CHANGE_TITLE:
      return state;
    case types.CHANGE_TITLE_SUCCESS:
      return {
        ...state,
        notes: state.notes.map(note => note._id === payload._id
                                        ? { ...note, title: payload.title }
                                        : note),
      };
    case types.CHANGE_TITLE_FAILURE:
      return { ...state, error: payload };
    case types.CHANGE_CONTENT:
      return state;
    case types.CHANGE_CONTENT_SUCCESS:
      return {
        ...state,
        notes: state.notes.map(note => note._id === payload._id
                                        ? { ...note, content: payload.content }
                                        : note),
      };
    case types.CHANGE_CONTENT_FAILURE:
      return { ...state, error: payload };
    case types.CHANGE_COLOR:
      return state;
    case types.CHANGE_COLOR_SUCCESS:
      return {
        ...state,
        notes: state.notes.map(note => note._id === payload._id
                                        ? { ...note, color: payload.color }
                                        : note),
      };
    case types.CHANGE_COLOR_FAILURE:
      return { ...state, error: payload };
    case types.DELETE_NOTE:
      return state;
    case types.DELETE_NOTE_SUCCESS:
      return { ...state, notes: state.notes.filter(item => item._id !== payload) };
    case types.DELETE_NOTE_FAILURE:
      return { ...state, error: payload };



    case types.ADD_TAG:
      return state;
    case types.ADD_TAG_SUCCESS:
      return {
        ...state,
        notes: state.notes.map(note => note._id === payload._id
                                        ? { ...note, tags: note.tags.concat([payload.tag]) }
                                        : note),
      };
    case types.ADD_TAG_FAILURE:
      return { ...state, error: payload };
    case types.DELETE_TAG:
      return state;
    case types.DELETE_TAG_SUCCESS:
      return {
        ...state,
        notes: state.notes.map(note => note._id === payload._id
                                        ? { ...note, tags: note.tags.filter(tag => tag !== payload.tag) }
                                        : note)
      };
    case types.DELETE_TAG_FAILURE:
      return { ...state, error: payload };
    default: return state;
  }
};

export default noteReducer;
