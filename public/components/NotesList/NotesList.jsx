import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';

import NoteContainer from '../../containers/NoteContainer.jsx';

import Loader from '../basic/Loader';

const NotesList = ({ params, loading, allNotes }) => {

  const masonryOptions = {
    transitionDuration: 300,
    gutter: 30,
    fitWidth: true
  };

  const style = {
    margin: 'auto auto auto auto',
  };

  const filteredNotes = allNotes.filter((note) =>  {
    return note.tags.includes(params)
  })

  const notesToShow = filteredNotes.length > 0 ? filteredNotes : allNotes;

  return (
    <section className='notes'>
      {loading
        ? <Loader type={'triple-dots'} />
        : <Masonry options={masonryOptions} style={style}>
            {notesToShow.map((note, i) => <NoteContainer key={i} note={note} />)}
          </Masonry>}
    </section>
  )
}

export default NotesList;

NotesList.propTypes = {
  allNotes: PropTypes.arrayOf(React.PropTypes.object).isRequired,
}
