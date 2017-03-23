import React from 'react';
import Heading from '../basic/Heading';
import Modal from '../basic/Modal';
import ForgotPasswordForm from '../../components/forms/ForgotPasswordForm';

const ForgotPasswordModal = ({ errors, isTokenSent, closeModal, ...rest }) => {
  return (
    <Modal closeModal={closeModal} >
      {errors.general &&
      <div>
        <Heading style={{ color: 'tomato' }}>Oops, something went wrong</Heading>
        <h2 style={{ textAlign: 'center' }} >{errors.general}</h2>
      </div>}
  {isTokenSent ? <Heading>Alrighty, instructions have been sent, check your inbox!</Heading> :
      <div>
        <Heading>We will send you an email with instructions on how to reset password</Heading>
        <ForgotPasswordForm errors={errors} {...rest} />
      </div>}
    </Modal>
  );
};

export default ForgotPasswordModal;