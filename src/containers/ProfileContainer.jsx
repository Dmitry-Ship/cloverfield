import React, { Component } from 'react';
import { withRouter } from 'react-router';
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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return Object.assign({}, stateProps,
    { onClick: () => dispatch(logout(() => history.push('/welcome'))),
      fetchUser: () => dispatch(fetchUser()) });
};

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

export default withRouter(connect(mapStateToProps, null, mergeProps)(ProfileContainer));
