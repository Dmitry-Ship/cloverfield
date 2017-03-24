import React from 'react';
import { connect } from 'react-redux';
import ExpandedNote from '../components/ExpandedNote';
import { openLightBox } from '../actions/UIActions';
import { withRouter } from 'react-router-dom';

import { getTagsSuggestions, getNote } from '../reducers/noteReducer';

import {
  editNote,
  addTag,
  deleteTag,
  addImage,
  deleteImage,
  deleteNote } from '../actions/noteActions';

const mapStateToProps = (store, ownProps) => ({
  // tagsSuggestions: getTagsSuggestions(store, getNote(store, ownProps.match.params.noteId).tags),
  note: getNote(store, ownProps.match.params.noteId),
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
});

const ExpandedNoteContainer = props => {
  if (!props.match.params.noteId) {
    return null;
  }
  return (
    <ExpandedNote {...props} />
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpandedNoteContainer));
