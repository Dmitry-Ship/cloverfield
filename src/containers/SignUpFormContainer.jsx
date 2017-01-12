import { connect } from 'react-redux';
import { signUp } from '../actions/authActions';
import SignUpForm from '../components/SignUpForm';

const mapStateToProps = store => ({
  isLoggedIn: store.authReducer.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(signUp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
