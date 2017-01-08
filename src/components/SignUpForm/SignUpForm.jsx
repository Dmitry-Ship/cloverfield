import React, { Component } from 'react';

import TextField from '../basic/TextField';
import FileUploader from '../basic/FileUploader';
import Form from '../basic/Form';
import Button from '../basic/Button';

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

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleConfirmPasswordChange(e) {
    this.setState({ confirmPassword: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;
    const file = this.state.userpic;
    const accountInfo = {
            // username: `${firstName} ${lastName}`,
            email,
            password,
            // userpic: file.name
          };

    if (password === confirmPassword && password !== '' && confirmPassword !== '') {
      this.props.onSubmit(accountInfo);
    } else {
      alert('passwords don`t match');
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>

        <FileUploader
          placeholder="Add a userpic"
          fileType="image/*"
          onChange={this.handleUserpicChange}
          // required
        />

        <TextField
          type="text"
          placeholder="First Name"
          onChange={this.handleFirstNameChange}
          // required
        />

        <TextField
          type="text"
          placeholder="Last Name"
          onChange={this.handleLastNameChange}
          required
        />

        <TextField
          type="email"
          placeholder="Email"
          onChange={this.handleEmailChange}
          required
        />

        <TextField
          type="password"
          placeholder="Password"
          onChange={this.handlePasswordChange}
          required
        />

        <TextField
          type="text"
          placeholder="Confirm Password"
          onChange={this.handleConfirmPasswordChange}
          required
        />

        <Button type="submit" label="Submit" />

      </Form>
    );
  }
}
