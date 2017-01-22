import React, { PropTypes } from 'react';
import Masonry from 'react-masonry-component';

import NoteContainer from '../../containers/NoteContainer';

import Loader from '../basic/Loader';

const NotesList = ({ params, loading, allNotes }) => {
  const masonryOptions = {
    transitionDuration: 300,
    gutter: 30,
    fitWidth: true,
  };

  const style = {
    margin: 'auto',
  };

  const filteredNotes = allNotes.filter(note => note.tags.includes(params.tagText));
  const notesToShow = filteredNotes.length > 0 ? filteredNotes : allNotes;

  return (
    <section className="notes">
      {loading
        ? <Loader type="triple-dots" />
        : <Masonry options={masonryOptions} style={style}>
          {notesToShow.map((note, i) => <NoteContainer note={note} key={i} />)}
        </Masonry>}
    </section>
  );
};
export default NotesList;

NotesList.propTypes = {
  allNotes: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  params: PropTypes.object,
  loading: PropTypes.bool,
};
