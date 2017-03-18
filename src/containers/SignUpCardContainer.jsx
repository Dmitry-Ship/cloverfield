import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { signUp } from '../actions/authActions';
import SignUpCard from '../components/SignUpCard';
import LoginCardContainer from './LoginCardContainer';

import validation from '../../helpers/validations/signup';
import { getErrorMessage, getIsLoggedIn } from '../reducers/authReducer';
import { openModal } from '../actions/UIActions';


const mapStateToProps = store => ({
  errors: getErrorMessage(store),
  isLoggingIn: getIsLoggedIn(store),
  validation,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return Object.assign({}, stateProps,
    { onSubmit: data => dispatch(signUp(data, () => history.push('/'))),
      onLoginClick: () => dispatch(openModal(<LoginCardContainer />)),
    });
};

export default withRouter(connect(mapStateToProps, null, mergeProps)(SignUpCard));

