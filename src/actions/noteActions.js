import axios from 'axios';

import * as types from './actionTypes';

const url = '/notes';


const fetchNotesSuccess = notes => ({
  type: types.FETCH_NOTES_SUCCESS,
  notes,
});

const fetchNotesFailure = error => ({
  type: types.FETCH_NOTES_FAILURE,
  error,
});

export const fetchNotes = () => (dispatch) => {
  dispatch({ type: types.FETCH_NOTES });
  axios.get(url)
    .then(res => dispatch(fetchNotesSuccess(res.data)))
    .catch(err => dispatch(fetchNotesFailure(err)));
};

const createNoteSuccess = newNote => ({
  type: types.CREATE_NOTE_SUCCESS,
  newNote,
});

const createNoteFailure = error => ({
  type: types.CREATE_NOTE_FAILURE,
  error,
});

export const createNote = note => (dispatch) => {
  dispatch({ type: types.CREATE_NOTE });
  axios.post(url, note)
    .then(res => dispatch(createNoteSuccess(res.data)))
    .catch(err => dispatch(createNoteFailure(err)));
};

const changeTitleSuccess = note => ({
  type: types.CHANGE_TITLE_SUCCESS,
  note,
});

const changeTitleFailure = error => ({
  type: types.CHANGE_TITLE_FAILURE,
  error,
});

export const changeTitle = (title, id) => (dispatch) => {
  dispatch({ type: types.CHANGE_TITLE });
  axios.put(`${url}/${id}`, { title })
    .then(res => dispatch(changeTitleSuccess(res.data)))
    .catch(err => dispatch(changeTitleFailure(err)));
};

const changeContentSuccess = note => ({
  type: types.CHANGE_CONTENT_SUCCESS,
  note,
});

const changeContentFailure = error => ({
  type: types.CHANGE_CONTENT_FAILURE,
  error,
});

export const changeContent = (content, id) => (dispatch) => {
  dispatch({ type: types.CHANGE_CONTENT });
  axios.put(`${url}/${id}`, { content })
    .then(res => dispatch(changeContentSuccess(res.data)))
    .catch(err => dispatch(changeContentFailure(err)));
};

const changeColorSuccess = note => ({
  type: types.CHANGE_COLOR_SUCCESS,
  note,
});

const changeColorFailure = error => ({
  type: types.CHANGE_COLOR_FAILURE,
  error,
});

export const changeColor = (color, id) => (dispatch) => {
  dispatch({ type: types.CHANGE_COLOR });
  axios.put(`${url}/${id}`, { color })
    .then(res => dispatch(changeColorSuccess(res.data)))
    .catch(err => dispatch(changeColorFailure(err)));
};

const deleteNoteSuccess = id => ({
  type: types.DELETE_NOTE_SUCCESS,
  id,
});

const deleteNoteFailure = error => ({
  type: types.DELETE_NOTE_FAILURE,
  error,
});

export const deleteNote = id => (dispatch) => {
  dispatch({ type: types.DELETE_NOTE });
  axios.delete(`${url}/${id}`)
    .then(res => dispatch(deleteNoteSuccess(res.data)))
    .catch(err => dispatch(deleteNoteFailure(err)));
};

const addTagSuccess = note => ({
  type: types.ADD_TAG_SUCCESS,
  note,
});

const addTagFailure = error => ({
  type: types.ADD_TAG_FAILURE,
  error,
});

export const addTag = (tag, id) => (dispatch) => {
  dispatch({ type: types.ADD_TAG });
  axios.put(`${url}/${id}`, { tags: tag })
    .then(res => dispatch(addTagSuccess(res.data)))
    .catch(err => dispatch(addTagFailure(err)));
};

const deleteTagSuccess = note => ({
  type: types.DELETE_TAG_SUCCESS,
  note,
});

const deleteTagFailure = error => ({
  type: types.DELETE_TAG_FAILURE,
  error,
});

export const deleteTag = (tag, id) => (dispatch) => {
  dispatch({ type: types.DELETE_TAG });
  axios.put(`${url}/${id}`, { tagsDel: tag })
    .then(res => dispatch(deleteTagSuccess(res.data)))
    .catch(err => dispatch(deleteTagFailure(err)));
};
