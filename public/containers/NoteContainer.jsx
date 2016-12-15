import React, { PropTypes } from 'react';

import axios from 'axios';

import Note from '../components/Note';

const NoteContainer = ({ note, onSetColor, onUpdateTitle, onUpdateContent, onDelete }) => {
  // const updateTitle = (value, id) => {
  //   axios.put(`/notes/${id}`, {title: value})
  //     .then((res) => console.log('success'))
  //     .catch(err => console.log(err));
  // }
  //
  // const updateContent = (value, id) => {
  //   axios.put(`/notes/${id}`, {content: value})
  //     .then((res) => console.log('success'))
  //     .catch(err => console.log(err));
  // }
  //
  // const setColor = (color, id) => {
  //   axios.put(`/notes/${id}`, {color: color})
  //     .then((res) => console.log('success'))
  //     .catch(err => console.log(err));
  // }
  //
  // const deleteNote = (id) => {
  //   axios.delete(`/notes/${id}`)
  //     .then(console.log('successfully removed'))
  //     .catch(err => console.log(err));
  // }

  return (
    <Note
      note={note}
      onSetColor={onSetColor}
      onUpdateTitle={onUpdateTitle}
      onUpdateContent={onUpdateContent}
      onDelete={onDeleteNote}
    />
  )
}

export default NoteContainer;

// NoteContainer.propTypes = {
//   note: PropTypes.obj.isRequired
// }
