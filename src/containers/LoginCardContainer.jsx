import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login } from '../actions/authActions';
import LoginCard from '../components/LoginCard';
import validation from '../../helpers/validations/login';
import { getErrorMessage, getIsLoggingIn } from '../reducers/authReducer';
import SignUpCardContainer from './SignUpCardContainer';
import ForgotPasswordCardContainer from './ForgotPasswordCardContainer';

import { openModal } from '../actions/UIActions';

const mapStateToProps = store => ({
  errors: getErrorMessage(store),
  isLoggingIn: getIsLoggingIn(store),
  validation,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return Object.assign({}, stateProps,
    { onSubmit: data => dispatch(login(data, () => history.push('/'))),
      onSignUpClick: () => dispatch(openModal(<SignUpCardContainer />)),
      onForgotClick: () => dispatch(openModal(<ForgotPasswordCardContainer />)),
    });
};

export default withRouter(connect(mapStateToProps, null, mergeProps)(LoginCard));
