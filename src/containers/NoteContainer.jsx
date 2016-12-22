import { connect } from 'react-redux';

import Note from '../components/Note';

import {
  changeColor,
  changeTitle,
  changeContent,
  deleteNote,
  deleteTag,
  addTag } from '../actions/noteActions';

const mapStateToProps = (store, ownProps) => ({
  note: ownProps.note,
});

const mapDispatchToProps = dispatch => ({
  onSetColor: (color, id) => dispatch(changeColor(color, id)),
  onUpdateTitle: (title, id) => dispatch(changeTitle(title, id)),
  onUpdateContent: (content, id) => dispatch(changeContent(content, id)),
  onDelete: id => dispatch(deleteNote(id)),
  onAddTag: (tag, id) => dispatch(addTag(tag, id)),
  onDeleteTag: (tag, id) => dispatch(deleteTag(tag, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
