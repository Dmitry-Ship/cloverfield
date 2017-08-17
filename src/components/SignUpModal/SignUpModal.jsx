import React from 'react';
import FancyLink from 'components/basic/FancyLink';
import Heading from 'components/basic/Heading';
import Modal from 'components/basic/Modal';
import SignUpForm from 'components/forms/SignUpForm';

const SignUpModal = ({ closeModal, onForgotClick, onLoginClick, ...rest }) => (
    <Modal closeModal={closeModal} >
      <Heading>Create new account</Heading>
      <SignUpForm {...rest} />
      <FancyLink to="#" onClick={onLoginClick} >Already have an account?</FancyLink>
    </Modal>
  );

export default SignUpModal;
