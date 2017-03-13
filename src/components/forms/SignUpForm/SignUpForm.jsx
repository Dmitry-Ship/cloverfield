import React, { Component, PropTypes } from 'react';

import TextField from '../../basic/TextField';
import Button from '../../basic/Button';
import FormFileUploader from '../../basic/FormFileUploader';
import { input } from './SignUpForm.scss';

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      username: '',
      email: '',
      password: '',
      userpic: null,
      preview: '',
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handlUsernameChange = this.handlUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleImageDelete = this.handleImageDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  handleImageUpload(value, secondValue) {
    this.setState({ userpic: value, preview: secondValue });
  }

  handleImageDelete() {
    this.setState({ userpic: null, preview: '' });
  }

  handleFullNameChange(value) {
    this.setState({ fullName: value });
  }

  handlUsernameChange(value) {
    const errors = Object.assign({}, this.state.errors, { username: '' });
    this.setState({ username: value, errors });
  }

  handleEmailChange(value) {
    const errors = Object.assign({}, this.state.errors, { email: '' });
    this.setState({ email: value, errors });
  }

  handlePasswordChange(value) {
    const errors = Object.assign({}, this.state.errors, { password: '' });
    this.setState({ password: value, errors });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { isValid, errors } = this.props.validation(this.state);

    if (!isValid) {
      return this.setState({ errors });
    }

    const { fullName, username, email, password, userpic } = this.state;

    const formData = new FormData();

    formData.append('fullName', fullName);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    if (userpic) {
      formData.append('avatar', userpic, userpic.name);
    }

    this.props.onSubmit(formData);
  }

  render() {
    const { fullName,
            username,
            email,
            password,
            preview,
            errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>

        <TextField
          placeholder="Full Name"
          value={fullName}
          className={input}
          onChange={this.handleFullNameChange}
        />

        <TextField
          placeholder="Username"
          value={username}
          className={input}
          onChange={this.handlUsernameChange}
          error={errors.username}
          // required
        />

        <TextField
          type="email"
          placeholder="Email"
          value={email}
          className={input}
          onChange={this.handleEmailChange}
          error={errors.email}
          // required
        />

        <TextField
          type="password"
          placeholder="Password"
          value={password}
          className={input}
          onChange={this.handlePasswordChange}
          error={errors.password}
          // required
        />


        <FormFileUploader
          text="Upload a photo of yourself to get started."
          className={input}
          preview={preview}
          onDeleteImage={this.handleImageDelete}
          onChange={this.handleImageUpload}
        />

        <Button label="Signup" />
      </form>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  validation: PropTypes.func.isRequired,
};
