const noteReducer = (state = {
  fetching: false,
  fetched: false,
  notes: [],
}, action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      state = {
        ...state,
        fetched: true,
        fetching: true
      };
      break;
    case 'FETCH_NOTES_FULFILLED':
      state = {
        ...state,
        notes: action.payload.data,
        fetched: true,
        fetching: false
      };
      break;
    case 'CREATE_NOTE_FULFILLED':
      state = {
        ...state,
        notes: state.notes.concat([action.payload.data]),
      };
      break;
    case 'CHANGE_TITLE_FULFILLED':
      state = {
        ...state,
        notes: state.notes.map((note) => {
          if (note._id === action.payload.data._id) {
            note.title = action.payload.data.title
            return note
          } else {
            return note
          }
        }),
      };
      break;
    case 'CHANGE_CONTENT_FULFILLED':
      state = {
        ...state,
        notes: state.notes.map((note) => {
          if (note._id === action.payload.data._id) {
            note.content = action.payload.data.content
            return note
          } else {
            return note
          }
        }),
      };
      break;
    case 'CHANGE_COLOR_FULFILLED':
      state = {
        ...state,
        notes: state.notes.map((note) => {
          if (note._id === action.payload.data._id) {
            note.color = action.payload.data.color
            return note
          } else {
            return note
          }
        }),
      };
      break;
    case 'DELETE_NOTE_FULFILLED':
      state = {
        ...state,
        notes: state.notes.filter(item => item._id !== action.payload.data)
      };
      break;
  }
  return state;
};

export default noteReducer;
