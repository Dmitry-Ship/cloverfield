import { connect } from 'react-redux';
import { openModal } from '../actions/UIActions';

import GetStarted from '../components/GetStarted';

const mapDispatchToProps = dispatch => ({
  openLoginModal: () => dispatch(openModal('login')),
  openSignUpModal: () => dispatch(openModal('signup')),
});

export default connect(null, mapDispatchToProps)(GetStarted);
