import { connect } from 'react-redux';
import TopBar from '../components/TopBar';

const mapStateToProps = store => ({
  appName: 'My App',
  isLoggedIn: store.authReducer.isLoggedIn,
  navBarItems: store.authReducer.isLoggedIn ? [
    { label: 'Main', iconName: 'home', to: '/' },
    { label: 'About', iconName: 'info_outline', to: '/about' },
  ] : [
    { label: 'Login', iconName: 'perm_identity', to: '/login' },
    { label: 'SignUp', iconName: 'person', to: '/signup' },
  ],
});

export default connect(mapStateToProps)(TopBar);
