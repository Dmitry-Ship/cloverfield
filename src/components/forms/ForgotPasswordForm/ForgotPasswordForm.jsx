import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextField from 'components/basic/TextField';
import Button from 'components/basic/Button';
import UserForm from '../UserForm'

export default class ForgotPasswordForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.error });
  }

  handleEmailChange = (e) => {
    const errors = { ...this.state.errors, email: '' };
    this.setState({ email: e.target.value, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const data = { email };

    const { isValid, errors } = this.props.validation(this.state);

    if (!isValid) {
      return this.setState({ errors });
    }

    this.props.onSubmit(data);
  }

  render() {
    const { email, errors } = this.state;

    const fields = [
      {
        type: "email",
        name: "email",
        placeholder: "Email",
        value: email,
        error: errors.email,
        onChange: this.handleEmailChange,
      }
    ]

    return (
      <div>
        <UserForm fields={fields} onSubmit={this.handleSubmit} buttonLabel="Send" />
      </div>
    );
  }
}

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
