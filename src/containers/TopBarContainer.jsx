import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getIsLoggedIn } from '../reducers/authReducer';
import LoginCardContainer from './LoginCardContainer';
import SignUpCardContainer from './SignUpCardContainer';
import { openModal } from '../actions/UIActions';

import TopBar from '../components/TopBar';

const mapStateToProps = (store, ownProps) => ({
  isInSearchMode: ownProps.history.location.pathname.includes('search'),
  isLoggedIn: getIsLoggedIn(store),
  links: getIsLoggedIn(store) ? [
    { label: 'Home', iconName: 'home', to: '/' },
    { label: 'Stack', iconName: 'info_outline', to: '/about' },
  ] : [
    { label: 'Welcome', iconName: 'perm_identity', to: '/welcome' },
    { label: 'Stack', iconName: 'info_outline', to: '/about' },
  ],
});

const mapDispatchToProps = dispatch => ({
  openLoginModal: () => dispatch(openModal(<LoginCardContainer />)),
  openSignUpModal: () => dispatch(openModal(<SignUpCardContainer />)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));
