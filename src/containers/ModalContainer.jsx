import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/basic/Modal';
import { getIsOpen, getContent } from '../reducers/UIReducer';
import { closeModal } from '../actions/UIActions';

const mapStateToProps = store => ({
  isOpen: getIsOpen(store),
  content: getContent(store),
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

class ModalContainer extends Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }
    return (
      <Modal {...this.props} >
        {this.props.content}
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
