import React, { Component } from 'react';

import TextField from '../basic/TextField';
import Form from '../basic/Form';
import Button from '../basic/Button';

import { input } from './LoginForm.styl';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(value) {
    this.setState({ email: value });
  }

  handlePasswordChange(value) {
    this.setState({ password: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const data = { email, password };
    this.props.onSubmit(data);
  }

  render() {
    const { email, password } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <TextField
          type="email"
          value={email}
          name="email"
          className={input}
          placeholder="Email"
          onChange={this.handleEmailChange}
          required
        />
        <TextField
          type="password"
          value={password}
          className={input}
          placeholder="Password"
          onChange={this.handlePasswordChange}
          required
        />
        <Button
          type="submit"
          label="Submit"
        />
      </Form>
    );
  }
}
