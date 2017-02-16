import React, { Component, PropTypes } from 'react';

import TextField from '../basic/TextField';
import Form from '../basic/Form';
import FormFileUploader from '../basic/FormFileUploader';
import { input } from './SignUpForm.styl';

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      username: '',
      email: '',
      password: '',
      userpic: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handlUsernameChange = this.handlUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  handleImageUpload(value) {
    this.setState({ userpic: value });
  }

  handleFullNameChange(value) {
    this.setState({ fullName: value });
  }

  handlUsernameChange(value) {
    this.setState({ username: value });
  }

  handleEmailChange(value) {
    this.setState({ email: value });
  }

  handlePasswordChange(value) {
    this.setState({ password: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fullName, username, email, password, userpic } = this.state;

    const formData = new FormData();

    formData.append('fullName', fullName);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('avatar', userpic, userpic.name);

    this.props.onSubmit(formData);
  }

  render() {
    const { fullName,
            username,
            email,
            password } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>

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
          required
        />

        <TextField
          type="email"
          placeholder="Email"
          value={email}
          className={input}
          onChange={this.handleEmailChange}
          required
        />

        <TextField
          type="password"
          placeholder="Password"
          value={password}
          className={input}
          onChange={this.handlePasswordChange}
          required
        />

        <FormFileUploader className={input} onChange={this.handleImageUpload} />
      </Form>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
