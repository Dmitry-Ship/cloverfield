import { connect } from 'react-redux';
import { requestToken } from '../actions/authActions';
import ForgotPasswordCard from '../components/ForgotPasswordCard';
import validation from '../../helpers/validations/forgotPassword';
import { getErrorMessage, getIsTokenSent } from '../reducers/authReducer';

const mapStateToProps = store => ({
  errors: getErrorMessage(store),
  isTokenSent: getIsTokenSent(store),
  validation,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(requestToken(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordCard);
