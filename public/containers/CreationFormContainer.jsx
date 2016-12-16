import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CreationForm from '../components/CreationForm';

import { createNote } from '../actions/noteActions';

const CreationFormContainer = (props) => (
  <CreationForm onSubmit={props.createNote} />
);

const mapStateToProps = (state) => {
  return {
    store: state.noteReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => {
      dispatch(createNote(note));
    },
  };
};

CreationFormContainer.propTypes = {
  createNote: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreationFormContainer);
