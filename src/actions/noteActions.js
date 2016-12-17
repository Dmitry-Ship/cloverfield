import axios from 'axios';

export const fetchNotes = () => ({
  type: 'FETCH_NOTES',
  payload: axios.get('/notes'),
});

export const createNote = note => ({
  type: 'CREATE_NOTE',
  payload: axios.post('/notes', note),
});

export const changeTitle = (title, id) => ({
  type: 'CHANGE_TITLE',
  payload: axios.put(`/notes/${id}`, { title }),
});

export const changeContent = (content, id) => ({
  type: 'CHANGE_CONTENT',
  payload: axios.put(`/notes/${id}`, { content }),
});

export const changeColor = (color, id) => ({
  type: 'CHANGE_COLOR',
  payload: axios.put(`/notes/${id}`, { color }),
});

export const deleteNote = note => ({
  type: 'DELETE_NOTE',
  payload: axios.delete(`/notes/${note}`),
});
