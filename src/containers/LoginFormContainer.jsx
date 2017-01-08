import { connect } from 'react-redux';
import { login } from '../actions/authentificationActions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = store => ({
  isLoggedIn: store.authentificationReducer.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
