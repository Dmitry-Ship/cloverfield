import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import Profile from '../components/Profile';

const mapStateToProps = store => ({
  user: store.userReducer.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
});

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Profile user={this.props.user} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

ProfileContainer.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object,
};
