import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { fetchUser } from '../actions/userActions';
import Profile from '../components/Profile';

const mapStateToProps = store => ({
  user: store.userReducer.user,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(logout()),
  fetchUser: () => dispatch(fetchUser()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  items: [
    {
      label: 'LogOut',
      // iconName: 'exit_to_app',
      func: dispatchProps.onClick,
      to: '/login',
    },
  ],
  user: stateProps.user,
  fetchUser: dispatchProps.fetchUser,
});

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Profile user={this.props.user} items={this.props.items} />
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProfileContainer);

ProfileContainer.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object,
};
