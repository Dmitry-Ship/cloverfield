import { connect } from 'react-redux';
import { requestToken } from 'actions/authActions';
import ForgotPasswordModal from 'components/ForgotPasswordModal';
import validation from '../../helpers/validations/forgotPassword';
import { getAuthErrorMessage, getIsTokenSent } from 'selectors/authSelectors';
import { openModal, closeModal } from 'actions/UIActions';
import modalTypes from 'constants/modals';

const mapStateToProps = store => ({
  error: getAuthErrorMessage(store),
  isTokenSent: getIsTokenSent(store),
  validation,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(requestToken(data)),
  onLoginClick: () => dispatch(openModal(modalTypes.LOGIN)),
  closeModal: () => dispatch(closeModal()),

});


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordModal);
