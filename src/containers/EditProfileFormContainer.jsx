import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editProfile, fetchUser } from '../actions/userActions';
import EditProfileForm from '../components/forms/EditProfileForm';
import validation from '../../helpers/validations/signup';
import { getUser, getErrorMessage, getIsLoading } from '../reducers/userReducer';

const mapStateToProps = store => ({
  user: getUser(store),
  errors: getErrorMessage(store),
  isLoading: getIsLoading(store),
  validation,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(editProfile(data)),
  fetchUser: () => dispatch(fetchUser()),
});

class EditProfileFormContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <EditProfileForm {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileFormContainer);
