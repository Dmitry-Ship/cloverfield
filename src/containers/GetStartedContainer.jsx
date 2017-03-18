import React from 'react';
import { connect } from 'react-redux';
import LoginCardContainer from './LoginCardContainer';
import SignUpCardContainer from './SignUpCardContainer';
import { openModal } from '../actions/UIActions';

import GetStarted from '../components/GetStarted';

const mapDispatchToProps = dispatch => ({
  openLoginModal: () => dispatch(openModal(<LoginCardContainer />)),
  openSignUpModal: () => dispatch(openModal(<SignUpCardContainer />)),
});


export default connect(null, mapDispatchToProps)(GetStarted);
