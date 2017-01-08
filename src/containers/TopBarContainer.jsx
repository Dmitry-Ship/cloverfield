import React from 'react';

import TopBar from '../components/TopBar';

// const TopBarContainer = () => {
//   const navBarItems = [
//     { label: 'Main', iconName: 'home', to: '/' },
//     { label: 'About', iconName: 'info_outline', to: '/about' },
//     { label: 'Login', iconName: 'perm_identity', to: '/login' },
//     { label: 'SignUp', iconName: 'person', to: '/signup' },
//     { label: 'LogOut', iconName: 'exit_to_app', func: this.props.logout },
//   ];
//
//   return (
//     <TopBar appName="My App" navBarItems={navBarItems} />
//   );
// };
//
// export default TopBarContainer;

import { connect } from 'react-redux';
import { logout } from '../actions/authentificationActions';

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(logout()),
});

const mapStateToProps = store => ({
  appName: 'My App Lol',

});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  navBarItems: [{ label: 'Main', iconName: 'home', to: '/' },
    { label: 'About', iconName: 'info_outline', to: '/about' },
    { label: 'Login', iconName: 'perm_identity', to: '/login' },
    { label: 'SignUp', iconName: 'person', to: '/signup' },
    { label: 'LogOut', iconName: 'exit_to_app', func: dispatchProps.onClick, to: '#' },
  ],
  appName: 'My App Lol',
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TopBar);
