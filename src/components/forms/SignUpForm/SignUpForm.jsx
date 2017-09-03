import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextField from 'components/basic/TextField';
import Button from 'components/basic/Button';
import UserForm from '../UserForm'

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      username: '',
      email: '',
      password: '',
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.error });
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

  handlePasswordChange = (e) => {
    const errors = { ...this.state.errors, password: '' };
    this.setState({ password: e.target.value, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors } = this.props.validation(this.state);

    if (!isValid) {
      return this.setState({ errors });
    }

    const { fullName, username, email, password } = this.state;

    const formData = new FormData();

    formData.append('fullName', fullName);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    this.props.onSubmit(formData);
  }

  render() {
    const { fullName,
      username,
      email,
      password,
      errors } = this.state;

    const { isLoggingIn } = this.props;

    const fields = [
      {
        value: fullName,
        placeholder: "Full Name",
        onChange: this.handleFullNameChange,
      },
      {
        value: username,
        placeholder: "Username",
        onChange: this.handlUsernameChange,
      },
      {
        type: "email",
        value: email,
        name: "email",
        error: errors.email,
        placeholder: "Email",
        onChange: this.handleEmailChange,
      },
      {
        type: "password",
        value: password,
        name: "password",
        error: errors.password,
        placeholder: "Password",
        onChange: this.handlePasswordChange,
      }
    ]

    return (
      <div>
        <UserForm fields={fields} isLoading={isLoggingIn} onSubmit={this.handleSubmit} buttonLabel="Sign Up" />
      </div>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  validation: PropTypes.func.isRequired,
};
