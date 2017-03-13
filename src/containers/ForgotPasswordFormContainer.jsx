import React from 'react';
import { connect } from 'react-redux';
import { requestToken } from '../actions/authActions';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';
import Heading from '../components/basic/Heading';
import validation from '../../helpers/validations/forgotPassword';
import { getErrorMessage, getIsTokenSent } from '../reducers/authReducer';

const mapStateToProps = store => ({
  errors: getErrorMessage(store),
  isTokenSent: getIsTokenSent(store),
  validation,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(requestToken(data)),
});

const ForgotPasswordFormContainer = (props) => {
  if (props.isTokenSent) {
    return (
      <Heading>Alrighty, instructions have been sent, check your inbox!</Heading>
    );
  }

  if (props.errors.general) {
    return (
      <div>
        <Heading style={{ color: 'tomato' }}>Oops, something went wrong</Heading>
        <h2 style={{ textAlign: 'center' }} >{props.errors.general}</h2>
      </div>
    );
  }
  return (
    <div>
      <Heading>We will send you an email with instructions on how to reset your password</Heading>
      <ForgotPasswordForm {...props} />
    </div>
  );

}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordFormContainer);