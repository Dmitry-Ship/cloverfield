import React, { Component } from 'react';

import TextField from '../basic/TextField';
import Form from '../basic/Form';
import Button from '../basic/Button';

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

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const data = { email, password };
    this.props.onSubmit(data);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <TextField
          type="email"
          placeholder="Email"
          onChange={this.handleEmailChange}
          required
        />
        <TextField
          type="password"
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
