import React, { Component } from 'react';

import { Link } from 'react-router';

import TextField from '../basic/TextField';
import FileUploader from '../basic/FileUploader';
import Form from '../basic/Form';
import Button from '../basic/Button';
import Card from '../basic/Card';

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
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
    this.setState({ first_name: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ last_name: e.target.value });
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

    const first_name = this.state.first_name,
          last_name = this.state.last_name,
          email = this.state.email,
          password = this.state.password,
          confirmPassword = this.state.confirmPassword,
          file = this.state.userpic,
          accountInfo = {
            username: `${first_name} ${last_name}`,
            email: email,
            password: password,
            userpic: file.name
          };

    if (password === confirmPassword && password !== '' && confirmPassword !== '') {
      this.props.onSubmit(accountInfo, file)

    } else {
      Bert.alert('Passwords don`t match',  'danger', 'fixed-top', 'fa-frown-o')
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>

        <FileUploader
          placeholder="Add a userpic"
          fileType="image/*"
          onChange={this.handleUserpicChange}
          required
        />

        <TextField
          type="text"
          placeholder="First Name"
          onChange={this.handleFirstNameChange}
          required
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
