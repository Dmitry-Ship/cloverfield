import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import ProfileCard from '../components/ProfileCard';
import { getUser } from '../reducers';

const mapStateToProps = store => ({
  user: getUser(store),
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
});

class ProfileCardContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <ProfileCard {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCardContainer);
