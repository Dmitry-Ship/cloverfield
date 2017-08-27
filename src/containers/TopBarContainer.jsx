import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getIsLoggedIn } from 'selectors/authSelectors';
import { openModal } from 'actions/UIActions';
import TopBar from 'components/TopBar';
import modalTypes from 'constants/modals';
import * as navLinks from 'constants/navigation';

const mapStateToProps = (store, { history: { location } }) => ({
  isInSearchMode: location.pathname.includes('search'),
  tag: location.pathname.includes('tags') ? location.pathname.substring(location.pathname.indexOf('tags') + 5) : '',

  isLoggedIn: getIsLoggedIn(store),
  links: getIsLoggedIn(store) ? navLinks.loggedIn : navLinks.loggedOut,
});

const mapDispatchToProps = dispatch => ({
  openLoginModal: () => dispatch(openModal(modalTypes.LOGIN)),
  openSignUpModal: () => dispatch(openModal(modalTypes.SIGNUP)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));
