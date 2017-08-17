import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import ExpandedCreationForm from 'components/ExpandedCreationForm';
import { createNote } from 'actions/noteActions';
import { openModal, closeForm } from 'actions/UIActions';
import { getTagsSuggestions } from 'reducers/noteReducer';
import { getIsFormExpanded } from 'reducers';


const mapStateToProps = (store, ownProps) => ({
  tagsSuggestions: tags => getTagsSuggestions(store, tags),
  tag: ownProps.match.params.tagText,
  color: ownProps.match.params.color,
  query: ownProps.match.params.query,
  images: ownProps.match.params.images,
  isExpanded: getIsFormExpanded(store),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: note => dispatch(createNote(note)),
  expandImage: (images, i) => dispatch(openModal(images, i)),
  closeForm: () => dispatch(closeForm()),
});

const ExpandedCreationFormContainer = ({ query, images, isExpanded, ...rest }) => {
  if (query || images) {
    return null;
  }
  if (!isExpanded) {
    return null;
  }
  return (
    <ExpandedCreationForm {...rest} />
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpandedCreationFormContainer));
