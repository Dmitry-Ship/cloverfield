import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';

import Note from '../Note';

import Loader from '../basic/Loader';

const NotesList = ({
  params,
  loading,
  allNotes,
  onSetColor,
  onUpdateTitle,
  onUpdateContent,
  onDelete }) => {
  const masonryOptions = {
    transitionDuration: 300,
    gutter: 30,
    fitWidth: true,
  };

  const style = {
    margin: 'auto auto auto auto',
  };

  const filteredNotes = allNotes.filter((note) => {
    return note.tags.includes(params);
  });

  const notesToShow = filteredNotes.length > 0 ? filteredNotes : allNotes;

  return (
    <section className="notes">
      {loading
        ? <Loader type={'triple-dots'} />
        : <Masonry options={masonryOptions} style={style}>
          {notesToShow.map((note, i) => <Note
            note={note}
            onSetColor={onSetColor}
            onUpdateTitle={onUpdateTitle}
            onUpdateContent={onUpdateContent}
            onDelete={onDelete}
            key={i}
          />)}
        </Masonry>}
    </section>
  );
};

export default NotesList;

NotesList.propTypes = {
  allNotes: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
