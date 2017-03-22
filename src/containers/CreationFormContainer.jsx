import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import CreationForm from '../components/CreationForm';
import { createNote } from '../actions/noteActions';
import { openModal } from '../actions/UIActions';
import { getTagsSuggestions } from '../reducers/noteReducer';
import ExpandedImage from '../components/basic/ExpandedImage';


const mapStateToProps = (store, ownProps) => ({
  tagsSuggestions: tags => getTagsSuggestions(store, tags),
  tag: ownProps.match.params.tagText,
  color: ownProps.match.params.color,
  query: ownProps.match.params.query,
  images: ownProps.match.params.images,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: note => dispatch(createNote(note)),
  expandImage: (images, i) => dispatch(openModal(<ExpandedImage images={images} index={i} />)),
});

const CreationFormContainer = ({ query, images, ...rest }) => {
  if (query || images) {
    return (
      null
    );
  }
  return (
    <CreationForm {...rest} />
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreationFormContainer));
