import { connect } from 'react-redux';

import CreationForm from '../components/CreationForm';
import { createNote } from '../actions/noteActions';
import { getTagsSuggestions } from '../reducers/noteReducer';

const mapStateToProps = store => ({
  tagsSuggestions: tags => getTagsSuggestions(store, tags),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: note => dispatch(createNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreationForm);
