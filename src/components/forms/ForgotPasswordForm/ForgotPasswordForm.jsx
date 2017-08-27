import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextField from 'components/basic/TextField';
import Button from 'components/basic/Button';

import styles from './ForgotPasswordForm.scss';

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

  handleEmailChange(e) {
    const errors = Object.assign({}, this.state.errors, { email: '' });
    this.setState({ email: e.target.value, errors });
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
          className={styles.input}
          error={errors.email}
          placeholder="Email"
          onChange={this.handleEmailChange}
        // required*/}
        />
        <Button className={styles.button} label="Send" />
      </form>
    );
  }
}

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
