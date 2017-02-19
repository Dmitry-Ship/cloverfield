import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import LoginForm from '../components/LoginForm';
import validation from '../../helpers/validations/login';

const mapStateToProps = store => ({
  errors: store.authReducer.error,
  isLoggingIn: store.authReducer.isLoggingIn,
  validation,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
