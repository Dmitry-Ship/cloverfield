import React from 'react';

import Note from '../components/Note';

const NoteContainer = ({ note }) => {
  const updateTitle = (value, id) => {
    console.log(`value: ${value}, id: ${id}`);
  }

  const setColor = (color, id) => {
    console.log(`color: ${color}, id: ${id}`);
  }

  return (
    <Note
      note={note}
      onSetColor={setColor}
      onUpdateTitle={updateTitle}
    />
  )
}

export default NoteContainer;
