import React, { PropTypes, Component } from 'react';

import TextField from '../../basic/TextField';
import Button from '../../basic/Button';

import { input } from './ForgotPasswordForm.scss';

export default class ForgotPasswordForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  handleEmailChange(value) {
    const errors = Object.assign({}, this.state.errors, { email: '' });
    this.setState({ email: value, errors });
  }

  handleSubmit(e) {
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
    const { email } = this.state;
    const { errors } = this.state;

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
          // required*/}
        />
        <Button label="Send" />
      </form>
    );
  }
}

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};