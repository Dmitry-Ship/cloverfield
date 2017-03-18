import React, { Component, PropTypes } from 'react';

import TextField from '../../basic/TextField';
import Button from '../../basic/Button';
import { input, button } from './SignUpForm.scss';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handlUsernameChange = this.handlUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
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

  handlePasswordChange(e) {
    const errors = Object.assign({}, this.state.errors, { password: '' });
    this.setState({ password: e.target.value, errors });
  }

  handleSubmit(e) {
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

        <Button className={button} label="Signup" />
      </form>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  validation: PropTypes.func.isRequired,
};
