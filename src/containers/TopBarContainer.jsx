import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getIsLoggedIn } from '../reducers';
import { openModal } from '../actions/UIActions';

import TopBar from '../components/TopBar';

const mapStateToProps = (store, ownProps) => ({
  isInSearchMode: ownProps.history.location.pathname.includes('search'),
  tag: ownProps.history.location.pathname.substring(6),
  isLoggedIn: getIsLoggedIn(store),
  links: getIsLoggedIn(store) ? [
    { label: 'Home', iconName: 'home', to: '/' },
    { label: 'Stack', iconName: 'info_outline', to: '/about' },
  ] : [
    { label: 'Welcome', iconName: 'home', to: '/welcome' },
    { label: 'Stack', iconName: 'info_outline', to: '/about' },
  ],
});

const mapDispatchToProps = dispatch => ({
  openLoginModal: () => dispatch(openModal('login')),
  openSignUpModal: () => dispatch(openModal('signup')),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));
