import React from 'react';
import FancyLink from '../basic/FancyLink';
import Heading from '../basic/Heading';
import Modal from '../basic/Modal';
import SignUpForm from '../../components/forms/SignUpForm';

const SignUpModal = ({ closeModal, onForgotClick, onLoginClick, ...rest }) => {
  return (
    <Modal closeModal={closeModal} >
      <Heading>Create new account</Heading>
      <SignUpForm {...rest} />
      <FancyLink to="#" onClick={onLoginClick} >Already have an account?</FancyLink>
    </Modal>
  );
};

export default SignUpModal;
