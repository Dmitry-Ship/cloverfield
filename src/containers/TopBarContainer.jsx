import { connect } from 'react-redux';
import TopBar from '../components/TopBar';
import { getIsLoggedIn } from '../reducers/authReducer';

const mapStateToProps = store => ({
  appName: 'My App',
  isLoggedIn: getIsLoggedIn(store),
  navBarItems: getIsLoggedIn(store) ? [
    { label: 'Home', iconName: 'home', to: '/' },
    { label: 'About', iconName: 'info_outline', to: '/about' },
  ] : [
    { label: 'Login', iconName: 'perm_identity', to: '/login' },
    { label: 'SignUp', iconName: 'person', to: '/signup' },
  ],
});

export default connect(mapStateToProps)(TopBar);
