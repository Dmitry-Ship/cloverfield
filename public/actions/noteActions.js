import axios from 'axios';

export function fetchNotes() {
  return {
    type: 'FETCH_NOTES',
    payload: axios.get('/notes'),
  };
}

export function createNote(note) {
  return {
    type: 'CREATE_NOTE',
    payload: axios.post('/notes', note),
  };
}

export function changeTitle(title, id) {
  return {
    type: 'CHANGE_TITLE',
    payload: axios.put(`/notes/${id}`, { title }),
  };
}

export function changeContent(content, id) {
  return {
    type: 'CHANGE_CONTENT',
    payload: axios.put(`/notes/${id}`, { content }),
  };
}

export function changeColor(color, id) {
  return {
    type: 'CHANGE_COLOR',
    payload: axios.put(`/notes/${id}`, { color }),
  };
}

export function deleteNote(note) {
  return {
    type: 'DELETE_NOTE',
    payload: axios.delete(`/notes/${note}`),
  };
}
