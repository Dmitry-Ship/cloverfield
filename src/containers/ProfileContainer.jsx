import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { fetchUser } from '../actions/userActions';
import Profile from '../components/Profile';
import { getUser } from '../reducers/userReducer';

const mapStateToProps = store => ({
  user: getUser(store),
  profileRoute: '/profile',
  editRoute: '/editprofile',
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(logout()),
  fetchUser: () => dispatch(fetchUser()),
});

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
