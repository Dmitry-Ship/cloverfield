import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CreationForm from '../components/CreationForm';
import { createNote } from '../actions/noteActions';
import { expandImage } from '../actions/UIActions';
import { getTagsSuggestions, getQuery } from '../reducers/noteReducer';

const mapStateToProps = (store, ownProps) => ({
  tagsSuggestions: tags => getTagsSuggestions(store, tags),
  tag: ownProps.match.params.tagText,
  color: ownProps.match.params.color,
  query: getQuery(store),
  
});

const mapDispatchToProps = dispatch => ({
  onSubmit: note => dispatch(createNote(note)),
  expandImage: (image, i) => dispatch(expandImage(image, i)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreationForm));
