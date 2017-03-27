import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ExpandedNote from '../components/ExpandedNote';
import { openLightBox } from '../actions/UIActions';

import { getTagsSuggestions, getNote } from '../reducers/noteReducer';
import { getIsFetching } from '../reducers';


import {
  fetchNotes,
  editNote,
  addTag,
  deleteTag,
  addImage,
  deleteImage,
  deleteNote } from '../actions/noteActions';

const mapStateToProps = (store, ownProps) => ({
  note: getNote(store, ownProps.match.params.noteId),
  // tagsSuggestions: getTagsSuggestions(store, getNote(store, ownProps.match.params.noteId).tags),

  
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  onSetColor: color => dispatch(editNote('color', color, ownProps.match.params.noteId)),
  onUpdateTitle: title => dispatch(editNote('title', title, ownProps.match.params.noteId)),
  onUpdateBody: body => dispatch(editNote('body', body, ownProps.match.params.noteId)),
  onAddTag: tag => dispatch(addTag(tag, ownProps.match.params.noteId)),
  onDeleteTag: tag => dispatch(deleteTag(tag, ownProps.match.params.noteId)),
  onAddImage: image => dispatch(addImage(image, ownProps.match.params.noteId)),
  onDeleteImage: image => dispatch(deleteImage(image, ownProps.match.params.noteId)),
  onDelete: () => dispatch(deleteNote(ownProps.match.params.noteId)),
  expandImage: (images, i) => dispatch(openLightBox(images, i)),
  fetchNotes: () => dispatch(fetchNotes()),
});

class ExpandedNoteContainer extends Component {
  render() {
    const { match, isFetching, note, ...rest } = this.props;
    if (!match.params.noteId) {
      return null;
    } else if (!note) {
      return null;
    }

    return (
      <ExpandedNote note={note} {...rest} />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpandedNoteContainer));
