import * as types from '../actions/actionTypes';

const initialState = {
  fetching: false,
  notes: [],
  error: null,
};

// export const noteReducerFalure = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case types.FETCH_NOTES_FAILURE:
//     case types.CREATE_NOTE_FAILURE:
//     case types.CHANGE_TITLE_FAILURE:
//     case types.CHANGE_CONTENT_FAILURE:
//     case types.CHANGE_COLOR_FAILURE:
//     case types.DELETE_NOTE_FAILURE:
//     case types.ADD_TAG_FAILURE:
//     case types.DELETE_TAG_FAILURE:
//       return { ...state, error: payload };
//     default: return state;
//   }
// };
const changeProp = (state, payload, prop) => {
  state.notes.map(item => item._id === payload._id
                                  ? { ...item, prop: payload.prop }
                                  : item);
};

const noteReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { notes } = state;
  switch (type) {
    case types.FETCH_NOTES:
      return { ...state, fetching: true };
    case types.FETCH_NOTES_SUCCESS:
      return { ...state, notes: payload, fetching: false };
    case types.FETCH_NOTES_FAILURE:
      return { ...state, fetching: false, error: payload };
    case types.CREATE_NOTE:
      return state;
    case types.CREATE_NOTE_SUCCESS:
      return { ...state, notes: notes.concat([payload]) };
    case types.CREATE_NOTE_FAILURE:
      return { ...state, error: payload };
    case types.CHANGE_TITLE:
      return state;
    case types.CHANGE_TITLE_SUCCESS:
      return {
        ...state,
        notes: notes.map(note => note._id === payload._id
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
        notes: notes.map(note => note._id === payload._id
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
        notes: notes.map(note => note._id === payload._id
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
        notes: notes.map(note => note._id === payload._id
                                        ? { ...note, tags: payload.tags }
                                        : note),
      };
    case types.ADD_TAG_FAILURE:
      return { ...state, error: payload };
    case types.DELETE_TAG:
      return state;
    case types.DELETE_TAG_SUCCESS:
      return {
        ...state,
        notes: notes.map(note => note._id === payload._id
                                        ? { ...note, tags: payload.tags }
                                        : note),
      };
    case types.DELETE_TAG_FAILURE:
      return { ...state, error: payload };
    default: return state;
  }
};

export default noteReducer;
