import { connect } from 'react-redux';
import { fetchUser } from '../actions/authActions';
import Profile from '../components/Profile';

const mapStateToProps = store => ({
  user: store.authReducer.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
