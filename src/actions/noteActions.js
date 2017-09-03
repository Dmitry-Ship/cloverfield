import axios from 'axios';
import * as types from 'constants/actionTypes';

import setAuthHeader from '../../helpers/setAuthHeader';
import { notesURL } from '../../config/urls';

export const fetchNotes = () => (dispatch) => {
  dispatch({
    type: types.FETCH_NOTES,
    $fetch: notesURL,
  });
};

export const fetchNote = id => (dispatch) => {
  dispatch({
    type: types.FETCH_NOTE,
    $fetch: `${notesURL}/${id}`,
  });
};

export const createNote = note => (dispatch) => {
  dispatch({
    type: types.CREATE_NOTE,
    $fetch: [notesURL, {
      method: 'POST',
      body: note,
    }],
  });
  dispatch({ type: types.CLOSE_FORM_SUCCESS });
};

export const editNote = (prop, value, id) => (dispatch) => {
  // other properties needed for optimistic updates
  dispatch({
    type: types.EDIT_NOTE,
    $fetch: [`${notesURL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ [prop]: value }),
      headers: { 'Content-Type': 'application/json' },
    }],
    prop,
    value,
    optID: id,
  });

  // axios.put(`${notesURL}/${id}`, { [prop]: value }, setAuthHeader())
  //   .then(res => dispatch(editNoteSuccess(res.data, prop)))
  //   .catch(err => dispatch(editNoteFailure(err)));
};

export const addTag = (tag, id) => (dispatch) => {
  dispatch({
    type: types.ADD_TAG,
    $fetch: [`${notesURL}/${id}/tags`, {
      method: 'POST',
      body: JSON.stringify({ tag }),
      headers: { 'Content-Type': 'application/json' },
    }],
  });
};

export const deleteTag = (tag, id) => (dispatch) => {
  dispatch({
    type:
    types.DELETE_TAG,
    $fetch: [`${notesURL}/${id}/tags/${tag}`, {
      method: 'DELETE',
    }],
  });
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
  axios.post(`${notesURL}/${id}/images`, image, setAuthHeader())
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
  axios.delete(`${notesURL}/${id}/images/${image}`, setAuthHeader())
    .then(res => dispatch(deleteImageSuccess(res.data)))
    .catch(err => dispatch(deleteImageFailure(err.response.data)));
};

export const deleteNote = id => (dispatch) => {
  dispatch({
    type: types.DELETE_NOTE,
    $fetch: [`${notesURL}/${id}`, {
      method: 'DELETE',
    }],
  });
};

