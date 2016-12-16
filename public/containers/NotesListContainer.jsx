import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import NotesList from '../components/NotesList';

import {
  changeColor,
  changeTitle,
  changeContent,
  deleteNote,
  fetchNotes } from '../actions/noteActions';

class NotesListContainer extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    return (
      <NotesList
        onSetColor={this.props.changeColor}
        onUpdateTitle={this.props.changeTitle}
        onUpdateContent={this.props.changeContent}
        onDelete={this.props.deleteNote}
        allNotes={this.props.store.notes}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    store: state.noteReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => {
      dispatch(fetchNotes());
    },
    changeColor: (color, id) => {
      dispatch(changeColor(color, id));
    },
    changeTitle: (title, id) => {
      dispatch(changeTitle(title, id));
    },
    changeContent: (content, id) => {
      dispatch(changeContent(content, id));
    },
    deleteNote: (id) => {
      dispatch(deleteNote(id));
    },
  };
};

NotesListContainer.propTypes = {
  changeColor: PropTypes.func,
  changeTitle: PropTypes.func,
  changeContent: PropTypes.func,
  deleteNote: PropTypes.func,
  fetchNotes: PropTypes.func,
  // store: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesListContainer);
