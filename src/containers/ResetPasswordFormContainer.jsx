import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { resetPassword, verifyToken } from '../actions/authActions';
import ResetPasswordForm from '../components/forms/ResetPasswordForm';
import Heading from '../components/basic/Heading';
import validation from '../../helpers/validations/resetPassword';
import { getErrorMessage, getIsPasswordUpdated, getIsTokenExpired } from '../reducers/authReducer';

const mapStateToProps = store => ({
  errors: getErrorMessage(store),
  isPasswordUpdated: getIsPasswordUpdated(store),
  isTokenExpired: getIsTokenExpired(store),
  validation,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: data => dispatch(resetPassword(data, ownProps.token)),
  verifyToken: token => dispatch(verifyToken(token)),
});

class ResetPasswordFormContainer extends Component {

  componentWillMount() {
    this.props.verifyToken(this.props.token);
  }

  render() {
    if (this.props.isTokenExpired) {
      return (
        <div>
          <Heading>Oops, token expired</Heading>
          <Link to="forgotpassword" ><h3>Try again</h3></Link>
        </div>
      )
    }

    if (this.props.isPasswordUpdated) {
      return (
        <div>
          <Heading>Alrighty, your password has been changed!</Heading>
          <Link to="login" ><h3>Login with new password</h3></Link>
        </div>
      )
    }
    return (
      <div>
        <Heading>Type in new password</Heading>
        <ResetPasswordForm {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordFormContainer);