import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextField from '../../basic/TextField';
import Button from '../../basic/Button';
import FormFileUploader from '../../basic/FormFileUploader';
import { input, button } from './EditProfileForm.scss';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handlUsernameChange = this.handlUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleImageDelete = this.handleImageDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.user.userpic)
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

  handleImageUpload(value, secondValue) {
    this.setState({ userpic: value, preview: secondValue });
  }

  handleImageDelete() {
    this.setState({ userpic: null, preview: '' });
  }

  handleFullNameChange(e) {
    this.setState({ fullName: e.target.value });
  }

  handlUsernameChange(e) {
    const errors = Object.assign({}, this.state.errors, { username: '' });
    this.setState({ username: e.target.value, errors });
  }

  handleEmailChange(e) {
    const errors = Object.assign({}, this.state.errors, { email: '' });
    this.setState({ email: e.target.value, errors });
  }

  handleSubmit(e) {
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
    return (
      <form onSubmit={this.handleSubmit}>
        <FormFileUploader
          preview={this.state.preview}
          onDeleteImage={this.handleImageDelete}
          id="EditProfileUploader"
          className={input}
          onChange={this.handleImageUpload}
        />

        <TextField
          placeholder="Full Name"
          label="Full Name"
          value={fullName}
          className={input}
          onChange={this.handleFullNameChange}
        />

        <TextField
          placeholder="Username"
          label="Username"
          value={username}
          className={input}
          onChange={this.handlUsernameChange}
          error={errors.username}
          // required
        />

        <TextField
          type="email"
          placeholder="Email"
          label="Email"
          value={email}
          className={input}
          onChange={this.handleEmailChange}
          error={errors.email}
          // required
        />

        <Button className={button} isLoading={this.props.isLoading} >Edit</Button>
      </form>
    );
  }
}

EditProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  validation: PropTypes.func.isRequired,
};
