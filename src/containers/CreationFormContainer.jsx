import { connect } from 'react-redux';

import CreationForm from '../components/CreationForm';
import { createNote } from '../actions/noteActions';
import { expandImage } from '../actions/UIActions';
import { getTagsSuggestions } from '../reducers/noteReducer';

const mapStateToProps = store => ({
  tagsSuggestions: tags => getTagsSuggestions(store, tags),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: note => dispatch(createNote(note)),
  expandImage: (image, i) => dispatch(expandImage(image, i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreationForm);
