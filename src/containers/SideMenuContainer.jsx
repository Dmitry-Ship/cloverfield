import { connect } from 'react-redux';
import SideMenu from '../components/basic/SideMenu';

import { logout } from '../actions/authActions';

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(logout()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  items: [
    { label: 'Home', iconName: 'home', to: '/' },
    { label: 'About', iconName: 'info', to: '/about' },
    { label: 'Settings', iconName: 'settings', to: '/settings' },
    { label: 'Logout', func: dispatchProps.onClick, iconName: 'exit_to_app', to: '/login' },
  ],
});

export default connect(null, mapDispatchToProps, mergeProps)(SideMenu);
