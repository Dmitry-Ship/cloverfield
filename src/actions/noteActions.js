import axios from 'axios';
import * as types from './actionTypes';

import setAuthHeader from '../../helpers/setAuthHeader';

const url = '/api/notes';

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
  axios.get(url, setAuthHeader())
    .then(res => dispatch(fetchNotesSuccess(res.data)))
    .catch(err => dispatch(fetchNotesFailure(err.response.data)));
};

const fetchNoteSuccess = note => ({
  type: types.FETCH_NOTE_SUCCESS,
  note,
});

const fetchNoteFailure = error => ({
  type: types.FETCH_NOTE_FAILURE,
  error,
});

export const fetchNote = id => (dispatch) => {
  dispatch({ type: types.FETCH_NOTE });
  axios.get(`${url}/${id}`, setAuthHeader())
    .then(res => dispatch(fetchNoteSuccess(res.data)))
    .catch(err => dispatch(fetchNoteFailure(err.response.data)));
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
  axios.post(url, note, setAuthHeader())
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

export const editNote = (prop, value, id) => (dispatch) => {
  // other properties needed for optimistic updates
  dispatch({ type: types.EDIT_NOTE, prop, value, optID: id });
  axios.put(`${url}/${id}`, { [prop]: value }, setAuthHeader())
    .then(res => dispatch(editNoteSuccess(res.data, prop)))
    .catch(err => dispatch(editNoteFailure(err.response.data)));
};


const addTagSuccess = updatedNote => ({
  type: types.ADD_TAG_SUCCESS,
  updatedNote,
});

const addTagFailure = error => ({
  type: types.ADD_TAG_FAILURE,
  error,
});

export const addTag = (tag, id) => (dispatch) => {
  dispatch({ type: types.ADD_TAG });
  axios.post(`${url}/${id}/tags`, { tag }, setAuthHeader())
    .then(res => dispatch(addTagSuccess(res.data)))
    .catch(err => dispatch(addTagFailure(err.response.data)));
};

const deleteTagSuccess = updatedNote => ({
  type: types.DELETE_TAG_SUCCESS,
  updatedNote,
});

const deleteTagFailure = error => ({
  type: types.DELETE_TAG_FAILURE,
  error,
});

export const deleteTag = (tag, id) => (dispatch) => {
  dispatch({ type: types.DELETE_TAG });
  axios.delete(`${url}/${id}/tags/${tag}`, setAuthHeader())
    .then(res => dispatch(deleteTagSuccess(res.data, 'tags')))
    .catch(err => dispatch(deleteTagFailure(err.response.data)));
};


const addImageSuccess = updatedNote => ({
  type: types.ADD_IMAGE_SUCCESS,
  updatedNote,
});

const addImageFailure = error => ({
  type: types.ADD_IMAGE_FAILURE,
  error,
});

export const addImage = (image, id) => (dispatch) => {
  dispatch({ type: types.ADD_IMAGE });
  axios.post(`${url}/${id}/images`, image, setAuthHeader())
    .then(res => dispatch(addImageSuccess(res.data)))
    .catch(err => dispatch(addImageFailure(err.response.data)));
};

const deleteImageSuccess = updatedNote => ({
  type: types.DELETE_IMAGE_SUCCESS,
  updatedNote,
});

const deleteImageFailure = error => ({
  type: types.DELETE_IMAGE_FAILURE,
  error,
});

export const deleteImage = (image, id) => (dispatch) => {
  dispatch({ type: types.DELETE_IMAGE });
  axios.delete(`${url}/${id}/images/${image}`, setAuthHeader())
    .then(res => dispatch(deleteImageSuccess(res.data)))
    .catch(err => dispatch(deleteImageFailure(err.response.data)));
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
  axios.delete(`${url}/${id}`, setAuthHeader())
    .then(res => dispatch(deleteNoteSuccess(res.data)))
    .catch(err => dispatch(deleteNoteFailure(err.response.data)));
};

