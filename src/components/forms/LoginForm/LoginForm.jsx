import React, { PropTypes, Component } from 'react';

import TextField from '../../basic/TextField';
import Form from '../../basic/Form';

import { input } from './LoginForm.scss';

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

  handleEmailChange(value) {
    const errors = Object.assign({}, this.state.errors, { email: '' });
    this.setState({ email: value, errors });
  }

  handlePasswordChange(value) {
    const errors = Object.assign({}, this.state.errors, { password: '' });
    this.setState({ password: value, errors });
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
    const { email, password } = this.state;
    const { errors } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
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
      </Form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
