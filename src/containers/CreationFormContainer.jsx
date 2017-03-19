import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import CreationForm from '../components/CreationForm';
import { createNote } from '../actions/noteActions';
import { openModal } from '../actions/UIActions';
import { getTagsSuggestions, getQuery } from '../reducers/noteReducer';
import ExpandedImage from '../components/basic/ExpandedImage';


const mapStateToProps = (store, ownProps) => ({
  tagsSuggestions: tags => getTagsSuggestions(store, tags),
  tag: ownProps.match.params.tagText,
  color: ownProps.match.params.color,
  query: getQuery(store),
  
});

const mapDispatchToProps = dispatch => ({
  onSubmit: note => dispatch(createNote(note)),
  expandImage: (images, i) => dispatch(openModal(<ExpandedImage images={images} index={i} />)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreationForm));
