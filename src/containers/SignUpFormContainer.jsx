import { connect } from 'react-redux';
import { signUp } from '../actions/authActions';
import SignUpForm from '../components/SignUpForm';
import validation from '../../helpers/validations/signup';
import { getErrorMessage, getIsLoggedIn } from '../reducers/authReducer';

const mapStateToProps = store => ({
  errors: getErrorMessage(store),
  isLoggingIn: getIsLoggedIn(store),
  validation,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(signUp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
