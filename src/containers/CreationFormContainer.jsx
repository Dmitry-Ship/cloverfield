import { connect } from 'react-redux';

import CreationForm from '../components/CreationForm';
import { createNote } from '../actions/noteActions';

const mapDispatchToProps = dispatch => ({
  onSubmit: note => dispatch(createNote(note)),
});

export default connect(null, mapDispatchToProps)(CreationForm);
