import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ExpandedNote from '../components/ExpandedNote';
import Loader from '../components/basic/Loader';

import { openLightBox } from '../actions/UIActions';


import { getTagsSuggestions, getNote } from '../reducers/noteReducer';
import { getIsFetching } from '../reducers';

import {
  fetchNote,
  editNote,
  addTag,
  deleteTag,
  addImage,
  deleteImage,
  deleteNote } from '../actions/noteActions';

const mapStateToProps = (store, ownProps) => ({
  note: getNote(store, ownProps.match.params.noteId),
  id: ownProps.match.params.noteId,
  isFetchingNote: store.noteReducer.isFetchingNote,
  tagsSuggestions: getTagsSuggestions(store, getNote(store, ownProps.match.params.noteId).tags),
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
  fetchNote: id => dispatch(fetchNote(id)),
});

class ExpandedNoteContainer extends Component {

  componentWillMount() {
    if (!this.props.note._id) {
      this.props.fetchNote(this.props.id);
    }
  }
  render() {
    const { match, isFetchingNote, note, ...rest } = this.props;
    if (isFetchingNote) {
      return <Loader />;
    }

    return (
      <ExpandedNote note={note} {...rest} />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpandedNoteContainer));
