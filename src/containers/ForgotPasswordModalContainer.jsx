import { connect } from 'react-redux';
import { requestToken } from '../actions/authActions';
import ForgotPasswordModal from '../components/ForgotPasswordModal';
import validation from '../../helpers/validations/forgotPassword';
import { getErrorMessage, getIsTokenSent } from '../reducers/authReducer';
import { openModal, closeModal } from '../actions/UIActions';

const mapStateToProps = store => ({
  errors: getErrorMessage(store),
  isTokenSent: getIsTokenSent(store),
  validation,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(requestToken(data)),
  onLoginClick: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal()),

});


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordModal);