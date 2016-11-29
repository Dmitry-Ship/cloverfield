import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';

import Note from '../Note';
import Loader from '../basic/Loaders';

const NotesList = ({
                    allNotes,
                    onDelete,
                    onUpdateTitle,
                    onUpdateContent,
                    onSetColor,
                    params,
                    loading }) => {

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
          {notesToShow.map((note, i) => {
            return (
              <Note
                key={i}
                note={note}
                onDelete={onDelete}
                onSetColor={onSetColor}
                onUpdateTitle={onUpdateTitle}
                onUpdateContent={onUpdateContent}
              />
            )
          })}

        </Masonry>}
    </section>
  )
}

export default NotesList;

NotesList.propTypes = {
  onSetColor: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdateTitle: PropTypes.func.isRequired,
  onUpdateContent: PropTypes.func.isRequired,
  onSetColor: PropTypes.func.isRequired,
  allNotes: PropTypes.arrayOf(React.PropTypes.object).isRequired,
}
