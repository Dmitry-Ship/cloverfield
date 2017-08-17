import { connect } from 'react-redux';
import { openModal } from 'actions/UIActions';
import GetStarted from 'components/GetStarted';
import modalTypes from 'constants/modals';

const mapDispatchToProps = dispatch => ({
  openLoginModal: () => dispatch(openModal(modalTypes.LOGIN)),
  openSignUpModal: () => dispatch(openModal(modalTypes.SIGNUP)),
});

export default connect(null, mapDispatchToProps)(GetStarted);
