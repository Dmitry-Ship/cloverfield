import axios from 'axios';
import * as types from './actionTypes';

import token from '../../helpers/token';

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
  axios.get(url, token)
    .then(res => dispatch(fetchNotesSuccess(res.data)))
    .catch(err => dispatch(fetchNotesFailure(err.response.data)));
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
  axios.post(url, note, token)
    .then(res => dispatch(createNoteSuccess(res.data)))
    .catch(err => dispatch(createNoteFailure(err.response.data)));
};

const editNoteSuccess = (updatedNote, prop) => ({
  type: types.EDIT_NOTE_SUCCESS,
  updatedNote,
  prop,
});

const editNoteFailure = error => ({
  type: types.EDIT_NOTE_FAILURE,
  error,
});

export const editNote = (prop, color, id) => (dispatch) => {
  dispatch({ type: types.EDIT_NOTE });
  axios.put(`${url}/${id}`, { [prop]: color }, token)
    .then(res => dispatch(editNoteSuccess(res.data, prop)))
    .catch(err => dispatch(editNoteFailure(err.response.data)));
};

const editTagsSuccess = (updatedNote, prop) => ({
  type: types.EDIT_TAGS_SUCCESS,
  updatedNote,
  prop,
});

const editTagsFailure = error => ({
  type: types.EDIT_TAGS_FAILURE,
  error,
});

export const editTags = (prop, color, id) => (dispatch) => {
  dispatch({ type: types.EDIT_TAGS });
  axios.put(`${url}/${id}/tags`, { [prop]: color }, token)
    .then(res => dispatch(editTagsSuccess(res.data, 'tags')))
    .catch(err => dispatch(editTagsFailure(err.response.data)));
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
  axios.delete(`${url}/${id}`, token)
    .then(res => dispatch(deleteNoteSuccess(res.data)))
    .catch(err => dispatch(deleteNoteFailure(err.response.data)));
};
