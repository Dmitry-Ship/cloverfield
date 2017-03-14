import React, { PropTypes, Component } from 'react';

import TextField from '../../basic/TextField';
import Button from '../../basic/Button';

import { input } from './ChangePasswordForm.scss';

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

  handleOldPasswordChange(value) {
    const errors = Object.assign({}, this.state.errors, { oldPassword: '' });
    this.setState({ oldPassword: value, errors });
  }

  handleNewPasswordChange(value) {
    const errors = Object.assign({}, this.state.errors, { newPassword: '' });
    this.setState({ newPassword: value, errors });
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
          className={input}
          error={errors.oldPassword}
          placeholder="Old password"
          onChange={this.handleOldPasswordChange}
          // required
        />
        <TextField
          type="password"
          value={newPassword}
          error={errors.newPassword}
          className={input}
          placeholder="New password"
          onChange={this.handleNewPasswordChange}
          // required
        />
        <Button label="Change" />
      </form>
    );
  }
}

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
