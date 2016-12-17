const noteReducer = (state = {
  fetching: false,
  fetched: false,
  notes: [],
  error: null,
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_NOTES_PENDING':
      return {
        ...state,
        fetched: false,
        fetching: true,
      };
    case 'FETCH_NOTES_FULFILLED':
      return {
        ...state,
        notes: payload.data,
        fetched: true,
        fetching: false,
      };
    case 'CREATE_NOTE_FULFILLED':
      return {
        ...state,
        notes: state.notes.concat([payload.data]),
      };
    case 'CREATE_NOTE_REJECTED':
      return {
        ...state,
        error: payload.data,
      };
    case 'CHANGE_TITLE_FULFILLED':
      return {
        ...state,
        notes: state.notes.map((note) => {
          return note._id === payload.data._id
          ? Object.assign({}, note, { title: payload.data.title })
          : note;
        }),
      };
    case 'CHANGE_CONTENT_FULFILLED':
      return {
        ...state,
        notes: state.notes.map((note) => {
          return note._id === payload.data._id
          ? Object.assign({}, note, { content: payload.data.content })
          : note;
        }),
      };
    case 'CHANGE_COLOR_FULFILLED':
      return {
        ...state,
        notes: state.notes.map((note) => {
          return note._id === payload.data._id
          ? Object.assign({}, note, { color: payload.data.color })
          : note;
        }),
      };
    case 'CHANGE_COLOR_REJECTED':
      return {
        ...state,
        error: payload,
      };
    case 'DELETE_NOTE_FULFILLED':
      return {
        ...state,
        notes: state.notes.filter(item => item._id !== payload.data),
      };
    default: return state;
  }
};

export default noteReducer;
