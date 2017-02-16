import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  notes: [],
  error: null,
};

const noteReducer = (state = initialState, action) => {
  const { type, newNote, error, updatedNote, notes, id } = action;
  switch (type) {
    case types.FETCH_NOTES:
      return Object.assign({}, state, { isFetching: true });
    case types.FETCH_NOTES_SUCCESS:
      return Object.assign({}, state, { isFetching: false, notes });
    case types.FETCH_NOTES_FAILURE:
      return Object.assign({}, state, { isFetching: false, error });
    case types.CREATE_NOTE_SUCCESS:
      return Object.assign({}, state, { notes: [...state.notes, newNote] });
    case types.DELETE_NOTE_SUCCESS:
      return Object.assign({}, state, { notes: state.notes.filter(item => item._id !== id) });
    case types.ADD_TAG:
    case types.DELETE_TAG:
    case types.ADD_IMAGE:
    case types.DELETE_IMAGE:
    case types.EDIT_NOTE:
    case types.CREATE_NOTE:
    case types.DELETE_NOTE:
      return state;
    case types.ADD_TAG_SUCCESS:
    case types.DELETE_TAG_SUCCESS:
    case types.ADD_IMAGE_SUCCESS:
    case types.DELETE_IMAGE_SUCCESS:
    case types.EDIT_NOTE_SUCCESS:
      return Object.assign({},
        state,
        { notes: state.notes.map((note) => {
          if (note._id === updatedNote._id) {
            return Object.assign({}, note, updatedNote);
          }
          return note;
        })
        });
    case types.ADD_TAG_FAILURE:
    case types.DELETE_TAG_FAILURE:
    case types.ADD_IMAGE_FAILURE:
    case types.DELETE_IMAGE_FAILURE:
    case types.EDIT_NOTE_FAILURE:
    case types.DELETE_NOTE_FAILURE:
    case types.CREATE_NOTE_FAILURE:
      return Object.assign({}, state, { error });
    default: return state;
  }
};

export default noteReducer;
