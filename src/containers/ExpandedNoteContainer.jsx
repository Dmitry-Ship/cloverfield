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
  // componentWillMount() {
  //   this.props.fetchNotes();
  // }
  render() {
    const { match, isFetching, ...rest } = this.props;
    if (!match.params.noteId) {
      return null;
    }
    // console.log(isFetching)
    // if (isFetching) {
    //   return (<h1>Loading...</h1>)
    // }
    return (
      // <h1>Hello</h1>
      <ExpandedNote {...rest} />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpandedNoteContainer));
