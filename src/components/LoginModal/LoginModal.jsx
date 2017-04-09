import React from 'react';
import FancyLink from '../basic/FancyLink';
import Heading from '../basic/Heading';
import Modal from '../basic/Modal';
import LoginForm from '../../components/forms/LoginForm';

const LoginModal = ({ closeModal, onForgotClick, onSignUpClick, ...rest }) => {
  return (
    <Modal closeModal={closeModal} >
      <Heading>Welcome back</Heading>
      <LoginForm {...rest} />

      <FancyLink to="#" onClick={onForgotClick} >Forgot your password?</FancyLink>
      <FancyLink to="#" onClick={onSignUpClick} >New to Cloverfield? Sign Up here.</FancyLink>
    </Modal>
  );
};

export default LoginModal;
