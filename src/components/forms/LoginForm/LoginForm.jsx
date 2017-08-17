import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextField from 'components/basic/TextField';
import Button from 'components/basic/Button';

import { input, button } from './LoginForm.scss';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
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
    const { email, password } = this.state;
    const data = { email, password };

    const { isValid, errors } = this.props.validation(this.state);

    if (!isValid) {
      return this.setState({ errors });
    }

    this.props.onSubmit(data);
  }

  render() {
    const { email, password, errors } = this.state;
    const { isLoggingIn } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          type="email"
          value={email}
          name="email"
          className={input}
          error={errors.email}
          placeholder="Email"
          onChange={this.handleEmailChange}
        // required
        />
        <TextField
          type="password"
          value={password}
          error={errors.password}
          className={input}
          placeholder="Password"
          onChange={this.handlePasswordChange}
        // required
        />
        <Button className={button} isLoading={isLoggingIn} >Login</Button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
