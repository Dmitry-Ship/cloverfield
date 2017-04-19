import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import ExpandedCreationForm from '../components/ExpandedCreationForm';
import { createNote } from '../actions/noteActions';
import { openModal, closeModal } from '../actions/UIActions';
import { getTagsSuggestions } from '../reducers/noteReducer';

const mapStateToProps = (store, ownProps) => ({
  tagsSuggestions: tags => getTagsSuggestions(store, tags),
  tag: ownProps.match.params.tagText,
  color: ownProps.match.params.color,
  query: ownProps.match.params.query,
  images: ownProps.match.params.images,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: note => dispatch(createNote(note)),
  expandImage: (images, i) => dispatch(openModal(images, i)),
  closeModal: () => dispatch(closeModal()),
});

const ExpandedCreationFormContainer = ({ query, images, ...rest }) => {
  if (query || images) {
    return null;
  }
  return (
    <ExpandedCreationForm {...rest} />
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpandedCreationFormContainer));
