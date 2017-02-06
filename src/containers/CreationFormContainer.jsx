import { connect } from 'react-redux';

import CreationForm from '../components/CreationForm';
import { createNote } from '../actions/noteActions';
import { uploadImage } from '../actions/imageActions';

const mapDispatchToProps = dispatch => ({
  onSubmit: note => dispatch(createNote(note)),
  uploadImage: image => dispatch(uploadImage(image)),
});

export default connect(null, mapDispatchToProps)(CreationForm);
