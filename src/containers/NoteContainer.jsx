import { connect } from 'react-redux';

import Note from '../components/Note';

import { editNote, editTags, deleteNote } from '../actions/noteActions';

const mapStateToProps = (store, ownProps) => ({
  note: ownProps.note,
});

const mapDispatchToProps = dispatch => ({
  onSetColor: (color, id) => dispatch(editNote('color', color, id)),
  onUpdateTitle: (title, id) => dispatch(editNote('title', title, id)),
  onUpdateContent: (content, id) => dispatch(editNote('content', content, id)),
  onAddTag: (tag, id) => dispatch(editTags('tags', tag, id)),
  onDeleteTag: (tag, id) => dispatch(editTags('tagsDel', tag, id)),
  onDelete: id => dispatch(deleteNote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
