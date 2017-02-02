import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import NotesList from '../components/NotesList';

import { fetchNotes } from '../actions/noteActions';

const mapStateToProps = store => ({
  allNotes: store.noteReducer.notes,
  loading: store.noteReducer.fetching,
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch((fetchNotes)()),
});

class NotesListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { params, loading, allNotes } = this.props;
    return (
      <NotesList
        params={params}
        loading={loading}
        allNotes={allNotes}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesListContainer);

NotesListContainer.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  params: PropTypes.object,
  allNotes: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
};
