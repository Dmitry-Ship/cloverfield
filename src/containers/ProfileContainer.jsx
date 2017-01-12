import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import Profile from '../components/Profile';

const mapStateToProps = store => ({
  user: store.authReducer.user,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
