import { connect } from 'react-redux';
import TopBar from '../components/TopBar';
import { logout } from '../actions/authActions';

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(logout()),
});

const mapStateToProps = store => ({
  appName: 'My App',
  isLoggedIn: store.authReducer.isLoggedIn,

});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  navBarItems: stateProps.isLoggedIn ? [
    { label: 'Main', iconName: 'home', to: '/' },
    { label: 'About', iconName: 'info_outline', to: '/about' },
    { label: 'LogOut', iconName: 'exit_to_app', func: dispatchProps.onClick, to: '#' },
  ] : [
    { label: 'Login', iconName: 'perm_identity', to: '/login' },
    { label: 'SignUp', iconName: 'person', to: '/signup' },
  ],
  appName: 'My App',
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TopBar);
