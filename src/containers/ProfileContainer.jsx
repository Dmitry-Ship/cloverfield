import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { fetchUser } from '../actions/userActions';
import Profile from '../components/Profile';

const mapStateToProps = store => ({
  user: store.userReducer.user,
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
    const { user, items, onClick, profileRoute, editRoute } = this.props;
    return (
      <Profile user={user} onClick={onClick} profileRoute={profileRoute} editRoute={editRoute} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

ProfileContainer.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
};
