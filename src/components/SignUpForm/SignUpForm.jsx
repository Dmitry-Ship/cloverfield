import React, { Component, PropTypes } from 'react';

import TextField from '../basic/TextField';
import FileUploader from '../basic/FileUploader';
import Form from '../basic/Form';
import Button from '../basic/Button';

import { input } from './SignUpForm.styl';

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      userpic: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserpicChange = this.handleUserpicChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
  }
  handleUserpicChange(e) {
    this.setState({ userpic: e.target.files[0] });
  }

  handleFirstNameChange(value) {
    this.setState({ firstName: value });
  }

  handleLastNameChange(value) {
    this.setState({ lastName: value });
  }

  handleEmailChange(value) {
    this.setState({ email: value });
  }

  handlePasswordChange(value) {
    this.setState({ password: value });
  }

  handleConfirmPasswordChange(value) {
    this.setState({ confirmPassword: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword, userpic } = this.state;
    const formData = new FormData();

    formData.append('username', `${firstName} ${lastName}`);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('avatar', userpic);

    if (password === confirmPassword && password !== '' && confirmPassword !== '') {
      this.props.onSubmit(formData);
    } else {
      alert('passwords don`t match');
    }
  }

  render() {
    const { firstName,
            lastName,
            email,
            password,
            confirmPassword } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>

        <FileUploader
          placeholder="Add a userpic"
          fileType="image/*"
          className={input}
          onChange={this.handleUserpicChange}
          // required
        />

        <TextField
          type="text"
          placeholder="First Name"
          value={firstName}
          className={input}
          onChange={this.handleFirstNameChange}
          // required
        />

        <TextField
          type="text"
          placeholder="Last Name"
          value={lastName}
          className={input}
          onChange={this.handleLastNameChange}
          // required
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

        <TextField
          type="text"
          placeholder="Confirm Password"
          value={confirmPassword}
          className={input}
          onChange={this.handleConfirmPasswordChange}
          required
        />

        <Button type="submit" label="Submit" />

      </Form>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
