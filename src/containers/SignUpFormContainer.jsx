import { connect } from 'react-redux';
import { signUp } from '../actions/authActions';
import SignUpForm from '../components/SignUpForm';
import validation from '../../helpers/validations/signup';


const mapStateToProps = store => ({
  errors: store.authReducer.error,
  isLoggingIn: store.authReducer.isLoggingIn,
  validation,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(signUp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
