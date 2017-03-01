import React, { Component, PropTypes } from 'react';

import TextField from '../basic/TextField';
import Form from '../basic/Form';
import FormFileUploader from '../basic/FormFileUploader';
import { input } from './EditProfileForm.styl';

export default class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      username: '',
      email: '',
      password: '',
      userpic: null,
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handlUsernameChange = this.handlUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   errors: nextProps.errors
    // });
    this.setState({
      fullName: nextProps.user.fullName,
      username: nextProps.user.username,
      email: nextProps.user.email,
      password: nextProps.user.password,
      userpic: nextProps.user.userpic,
    });
  }

  handleImageUpload(value) {
    this.setState({ userpic: value });
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
    // formData.append('password', password);
    if (userpic) {
      formData.append('avatar', userpic, userpic.name);
      // formData.append('userpic', userpic.name);
    }

    this.props.onSubmit(formData);
  }

  render() {
    const { fullName,
            username,
            email,
            password,
            errors } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormFileUploader preview={this.state.userpic} className={input} onChange={this.handleImageUpload} />

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
          placeholder="New Password"
          value={password}
          className={input}
          onChange={this.handlePasswordChange}
          error={errors.password}
          // required
        />
      </Form>
    );
  }
}

EditProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
