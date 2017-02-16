import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import NotesList from '../components/NotesList';

import { fetchNotes } from '../actions/noteActions';

const mapStateToProps = store => ({
  allNotes: store.noteReducer.notes,
  isFetching: store.noteReducer.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch((fetchNotes)()),
});

class NotesListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { params, isFetching, allNotes } = this.props;
    return (
      <NotesList
        params={params}
        isFetching={isFetching}
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
  isFetching: PropTypes.bool.isRequired,
};
