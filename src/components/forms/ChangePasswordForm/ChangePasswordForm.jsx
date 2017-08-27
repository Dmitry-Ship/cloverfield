import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextField from 'components/basic/TextField';
import Button from 'components/basic/Button';
import UserForm from '../UserForm'

export default class ChangePasswordForm extends Component {
  constructor() {
    super();
    this.state = {
      oldPassword: '',
      newPassword: '',
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
    if (nextProps.isChanged) {
      this.setState({
        oldPassword: '',
        newPassword: '',
      });
    }
  }

  handleOldPasswordChange = (e) => {
    const errors = { ...this.state.errors, oldPassword: '' };
    this.setState({ oldPassword: e.target.value, errors });
  }

  handleNewPasswordChange = (e) => {
    const errors = { ...this.state.errors, newPassword: '' };
    this.setState({ newPassword: e.target.value, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { oldPassword, newPassword } = this.state;
    const data = { oldPassword, newPassword };

    const { isValid, errors } = this.props.validation(this.state);

    if (!isValid) { return this.setState({ errors }); }

    this.props.onSubmit(data);
  }

  render() {
    const { oldPassword, newPassword } = this.state;
    const { errors } = this.state;

    const fields = [
      {
        type: "password",
        value: oldPassword,
        name: "oldPassword",
        error: errors.oldPassword,
        placeholder: "Old password",
        onChange: this.handleOldPasswordChange,
      },
      {
        type: "password",
        value: newPassword,
        name: "password",
        error: errors.newPassword,
        placeholder: "New password",
        onChange: this.handleNewPasswordChange,
      }
    ]

    return (
      <div>
        <UserForm fields={fields} onSubmit={this.handleSubmit} buttonLabel="Change" />
      </div>
    );
  }
}

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
