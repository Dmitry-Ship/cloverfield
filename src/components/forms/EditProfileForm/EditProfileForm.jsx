import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextField from 'components/basic/TextField';
import Button from 'components/basic/Button';
import FormFileUploader from 'components/basic/FormFileUploader';
import styles from './EditProfileForm.scss';
import UserForm from '../UserForm'

export default class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      username: '',
      email: '',
      userpic: null,
      preview: '',
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      fullName: nextProps.user.fullName,
      username: nextProps.user.username,
      email: nextProps.user.email,
      password: nextProps.user.password,
      userpic: nextProps.user.userpic,
      preview: nextProps.user.userpic,
      errors: nextProps.errors || {},
    });
  }

  handleImageUpload = (value, secondValue) => {
    this.setState({ userpic: value, preview: secondValue });
  }

  handleImageDelete = () => {
    this.setState({ userpic: null, preview: '' });
  }

  handleFullNameChange = (e) => {
    this.setState({ fullName: e.target.value });
  }

  handlUsernameChange = (e) => {
    const errors = { ...this.state.errors, username: '' };
    this.setState({ username: e.target.value, errors });
  }

  handleEmailChange = (e) => {
    const errors = { ...this.state.errors, email: '' };
    this.setState({ email: e.target.value, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors } = this.props.validation(this.state);

    if (!isValid) {
      return this.setState({ errors });
    }

    const { fullName, username, email, userpic } = this.state;

    const formData = new FormData();

    formData.append('fullName', fullName);
    formData.append('username', username);
    formData.append('email', email);
    if (userpic) {
      formData.append('avatar', userpic, userpic.name);
    }

    if (!userpic) {
      formData.append('userpic', '');
    }

    this.props.onSubmit(formData);
  }

  render() {
    const { fullName,
      username,
      email,
      errors } = this.state;

    const { isLoading } = this.props

    const fields = [
      {
        label: "Full Name",
        placeholder: "Full Name",
        value: fullName,
        onChange: this.handleFullNameChange,
      },
      {
        value: username,
        label: "Username",
        placeholder: "Username",
        onChange: this.handlUsernameChange,
      },
      {
        type: "email",
        value: email,
        name: "email",
        label: "Email",
        error: errors.email,
        placeholder: "Email",
        onChange: this.handleEmailChange,
      },
    ]

    return (
      <div>
        <FormFileUploader
          preview={this.state.preview}
          onDeleteImage={this.handleImageDelete}
          id="EditProfileUploader"
          className={styles.input}
          onChange={this.handleImageUpload}
        />
        <UserForm fields={fields} isLoading={isLoading} onSubmit={this.handleSubmit} buttonLabel="Edit" />
      </div>
    );
  }
}

EditProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  validation: PropTypes.func.isRequired,
};
