import PropTypes from 'prop-types';
import React from 'react';
import Masonry from 'react-masonry-component';
import NoteContainer from 'containers/NoteContainer';

const NotesList = ({ notes }) => {
  const masonryOptions = {
    transitionDuration: 200,
    gutter: 12,
    fitWidth: true,
  };

  const style = {
    margin: 'auto',
  };

  return (
    <Masonry options={masonryOptions} style={style} >
      {notes.map(note => <NoteContainer note={note} key={note._id} />)}
    </Masonry>
  );
};

export default NotesList;

NotesList.propTypes = {
  notes: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
