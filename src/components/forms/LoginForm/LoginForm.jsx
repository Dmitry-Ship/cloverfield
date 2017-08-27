import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextField from 'components/basic/TextField';
import Button from 'components/basic/Button';
import UserForm from '../UserForm'

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
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

    const fields = [
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
        <UserForm fields={fields} isLoading={isLoggingIn} onSubmit={this.handleSubmit} buttonLabel="Login" />
      </div>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
