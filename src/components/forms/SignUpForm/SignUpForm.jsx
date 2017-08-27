import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextField from 'components/basic/TextField';
import Button from 'components/basic/Button';
import styles from './SignUpForm.scss';

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
    this.setState({ errors: nextProps.errors });
  }

  handleFullNameChange = (e) => {
    this.setState({ fullName: e.target.value });
  }

  handlUsernameChange = (e) => {
    const errors = Object.assign({}, this.state.errors, { username: '' });
    this.setState({ username: e.target.value, errors });
  }

  handleEmailChange = (e) => {
    const errors = Object.assign({}, this.state.errors, { email: '' });
    this.setState({ email: e.target.value, errors });
  }

  handlePasswordChange = (e) => {
    const errors = Object.assign({}, this.state.errors, { password: '' });
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

    return (
      <form onSubmit={this.handleSubmit}>

        <TextField
          placeholder="Full Name"
          value={fullName}
          className={styles.input}
          onChange={this.handleFullNameChange}
        />

        <TextField
          placeholder="Username"
          value={username}
          className={styles.input}
          onChange={this.handlUsernameChange}
          error={errors.username}
        // required
        />

        <TextField
          type="email"
          placeholder="Email"
          value={email}
          className={styles.input}
          onChange={this.handleEmailChange}
          error={errors.email}
        // required
        />

        <TextField
          type="password"
          placeholder="Password"
          value={password}
          className={styles.input}
          onChange={this.handlePasswordChange}
          error={errors.password}
        // required
        />

        <Button className={styles.button} isLoading={isLoggingIn} >Sign Up</Button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  validation: PropTypes.func.isRequired,
};
