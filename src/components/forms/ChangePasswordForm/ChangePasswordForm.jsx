import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextField from 'components/basic/TextField';
import Button from 'components/basic/Button';

import styles from './ChangePasswordForm.scss';

export default class ChangePasswordForm extends Component {
  constructor() {
    super();
    this.state = {
      oldPassword: '',
      newPassword: '',
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOldPasswordChange = this.handleOldPasswordChange.bind(this);
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
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

  handleOldPasswordChange(e) {
    const errors = Object.assign({}, this.state.errors, { oldPassword: '' });
    this.setState({ oldPassword: e.target.value, errors });
  }

  handleNewPasswordChange(e) {
    const errors = Object.assign({}, this.state.errors, { newPassword: '' });
    this.setState({ newPassword: e.target.value, errors });
  }

  handleSubmit(e) {
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

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          type="password"
          value={oldPassword}
          name="oldPassword"
          className={styles.input}
          error={errors.oldPassword}
          placeholder="Old password"
          onChange={this.handleOldPasswordChange}
        // required
        />
        <TextField
          type="password"
          value={newPassword}
          error={errors.newPassword}
          className={styles.input}
          placeholder="New password"
          onChange={this.handleNewPasswordChange}
        // required
        />
        <Button className={styles.button} >Change</Button>
      </form>
    );
  }
}

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
