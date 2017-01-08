import { connect } from 'react-redux';
import { signUp } from '../actions/authentificationActions';
import SignUpForm from '../components/SignUpForm';

const mapStateToProps = store => ({
  isLoggedIn: store.authentificationReducer.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(signUp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
