import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import LoginForm from '../components/forms/LoginForm';
import validation from '../../helpers/validations/login';
import { getErrorMessage, getIsLoggingIn } from '../reducers/authReducer';

const mapStateToProps = store => ({
  errors: getErrorMessage(store),
  isLoggingIn: getIsLoggingIn(store),
  validation,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
