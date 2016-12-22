import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';

import NoteContainer from '../../containers/NoteContainer';

import Loader from '../basic/Loader';

export default class NotesList extends Component {
  componentWillMount() {
    this.props.fetchNotes();
  }

  render() {
    const { params, loading, allNotes } = this.props;

    const masonryOptions = {
      transitionDuration: 300,
      gutter: 30,
      fitWidth: true,
    };

    const style = {
      margin: 'auto',
    };

    // const filteredNotes = allNotes.filter(note => note.tags.includes('params'));

    // const filteredNotes = allNotes.filter((note) => {
    //   return note.tags.includes(params);
    // });

    // const notesToShow = filteredNotes.length > 0 ? filteredNotes : allNotes;

    return (
      <section className="notes">
        {loading
          ? <Loader type="triple-dots" />
          : <Masonry options={masonryOptions} style={style}>
            {allNotes.map((note, i) => <NoteContainer note={note} key={i} />)}
          </Masonry>}
      </section>
    );
  }
}

NotesList.propTypes = {
  allNotes: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  params: PropTypes.string,
  loading: PropTypes.bool,
  fetchNotes: PropTypes.func,
};
