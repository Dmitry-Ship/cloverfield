import axios from 'axios';

import * as types from './actionTypes';

const fetchNotesSuccess = notes => ({
  type: types.FETCH_NOTES_SUCCESS,
  payload: notes,
});

const fetchNotesFailure = err => ({
  type: types.FETCH_NOTES_FAILURE,
  payload: err,
});

export const fetchNotes = () => (dispatch) => {
  dispatch({ type: types.FETCH_NOTES });
  axios.get('/notes')
    .then(res => dispatch(fetchNotesSuccess(res.data)))
    .catch(err => dispatch(fetchNotesFailure(err)));
};

const createNoteSuccess = notes => ({
  type: types.CREATE_NOTE_SUCCESS,
  payload: notes,
});

const createNoteFailure = err => ({
  type: types.CREATE_NOTE_FAILURE,
  payload: err,
});

export const createNote = note => (dispatch) => {
  dispatch({ type: types.CREATE_NOTE });
  axios.post('/notes', note)
    .then(res => dispatch(createNoteSuccess(res.data)))
    .catch(err => dispatch(createNoteFailure(err)));
};

const changeTitleSuccess = title => ({
  type: types.CHANGE_TITLE_SUCCESS,
  payload: title,
});

const changeTitleFailure = err => ({
  type: types.CHANGE_TITLE_FAILURE,
  payload: err,
});

export const changeTitle = (title, id) => (dispatch) => {
  dispatch({ type: types.CHANGE_TITLE });
  axios.put(`/notes/${id}`, { title })
    .then(res => dispatch(changeTitleSuccess(res.data)))
    .catch(err => dispatch(changeTitleFailure(err)));
};

const changeContentSuccess = content => ({
  type: types.CHANGE_CONTENT_SUCCESS,
  payload: content,
});

const changeContentFailure = err => ({
  type: types.CHANGE_CONTENT_FAILURE,
  payload: err,
});

export const changeContent = (content, id) => (dispatch) => {
  dispatch({ type: types.CHANGE_CONTENT });
  axios.put(`/notes/${id}`, { content })
    .then(res => dispatch(changeContentSuccess(res.data)))
    .catch(err => dispatch(changeContentFailure(err)));
};

const changeColorSuccess = color => ({
  type: types.CHANGE_COLOR_SUCCESS,
  payload: color,
});

const changeColorFailure = err => ({
  type: types.CHANGE_COLOR_FAILURE,
  payload: err,
});

export const changeColor = (color, id) => (dispatch) => {
  dispatch({ type: types.CHANGE_COLOR });
  axios.put(`/notes/${id}`, { color })
    .then(res => dispatch(changeColorSuccess(res.data)))
    .catch(err => dispatch(changeColorFailure(err)));
};

const deleteNoteSuccess = id => ({
  type: types.DELETE_NOTE_SUCCESS,
  payload: id,
});

const deleteNoteFailure = err => ({
  type: types.DELETE_NOTE_FAILURE,
  payload: err,
});

export const deleteNote = id => (dispatch) => {
  dispatch({ type: types.DELETE_NOTE });
  axios.delete(`/notes/${id}`)
    .then(res => dispatch(deleteNoteSuccess(res.data)))
    .catch(err => dispatch(deleteNoteFailure(err)));
};

const addTagSuccess = tag => ({
  type: types.ADD_TAG_SUCCESS,
  payload: tag,
});

const addTagFailure = err => ({
  type: types.ADD_TAG_FAILURE,
  payload: err,
});

export const addTag = (tag, id) => (dispatch) => {
  dispatch(addTagSuccess({_id: id, tag: tag }))
  // dispatch({ type: types.ADD_TAG });
  // axios.put(`/notes/${id}`, { tag })
  //   .then(res => dispatch(addTagSuccess(res.data)))
  //   .catch(err => dispatch(addTagFailure(err)));
};

const deleteTagSuccess = tag => ({
  type: types.DELETE_TAG_SUCCESS,
  payload: tag,
});

const deleteTagFailure = err => ({
  type: types.DELETE_TAG_FAILURE,
  payload: err,
});

export const deleteTag = (tag, id) => (dispatch) => {
  dispatch(deleteTagSuccess({_id: id, tag: tag }))
  // dispatch({ type: types.DELETE_TAG });
  // axios.put(`/notes/${id}`, { tag })
  //   .then(res => dispatch(addTagSuccess(res.data)))
  //   .catch(err => dispatch(addTagFailure(err)));
};
