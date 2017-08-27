import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextField from 'components/basic/TextField';
import Button from 'components/basic/Button';
import UserForm from '../UserForm'

export default class ResetPasswordForm extends Component {
  constructor() {
    super();
    this.state = {
      confirmPassword: '',
      password: '',
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  handleConfirmPasswordChange = (e) => {
    const errors = Object.assign({}, this.state.errors, { confirmPassword: '' });
    this.setState({ confirmPassword: e.target.value, errors });
  }

  handlePasswordChange = (e) => {
    const errors = Object.assign({}, this.state.errors, { password: '' });
    this.setState({ password: e.target.value, errors });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, password } = this.state;
    const data = { confirmPassword, password };

    const { isValid, errors } = this.props.validation(this.state);

    if (!isValid) {
      return this.setState({ errors });
    }

    this.props.onSubmit(data);
  }

  render() {
    const { confirmPassword, password } = this.state;
    const { errors } = this.state;

    const fields = [
      {
        type: "password",
        value: password,
        name: "newPassword",
        error: errors.password,
        placeholder: "New Password",
        onChange: this.handlePasswordChange,
      },
      {
        type: "password",
        value: confirmPassword,
        error: errors.newPassword,
        placeholder: "Confirm password",
        onChange: this.handleConfirmPasswordChange,
      }
    ]

    return (
      <div>
        <UserForm fields={fields} onSubmit={this.handleSubmit} buttonLabel="Set" />
      </div>
    );
  }
}

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
