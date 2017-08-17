import { connect } from 'react-redux';
import Note from 'components/Note';
import { openLightBox } from 'actions/UIActions';
import { getTagsSuggestions } from 'reducers/noteReducer';

import {
  editNote,
  addTag,
  deleteTag,
  addImage,
  deleteImage,
  deleteNote
} from 'actions/noteActions';

const mapStateToProps = (store, ownProps) => ({
  tagsSuggestions: getTagsSuggestions(store, ownProps.note.tags),
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  onSetColor: color => dispatch(editNote('color', color, ownProps.note._id)),
  onUpdateTitle: title => dispatch(editNote('title', title, ownProps.note._id)),
  onUpdateBody: body => dispatch(editNote('body', body, ownProps.note._id)),
  onAddTag: tag => dispatch(addTag(tag, ownProps.note._id)),
  onDeleteTag: tag => dispatch(deleteTag(tag, ownProps.note._id)),
  onAddImage: image => dispatch(addImage(image, ownProps.note._id)),
  onDeleteImage: image => dispatch(deleteImage(image, ownProps.note._id)),
  onDelete: () => dispatch(deleteNote(ownProps.note._id)),
  expandImage: (images, i) => dispatch(openLightBox(images, i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
