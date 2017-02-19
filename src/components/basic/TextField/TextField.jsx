import React, { Component, PropTypes } from 'react';

import { textField, errorMessage } from './TextField.styl';

export default class TextField extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const {
      type,
      name,
      placeholder,
      required,
      onFocus,
      error,
      value,
      onBlur,
      label,
      className } = this.props;
    return (
      <div className={className}>
        {label && <label >{label}</label>}
        <input
          className={textField}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          required={required}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={this.handleChange}
        />
        <p className={errorMessage}>{error}</p>
      </div>
    );
  }
}

TextField.defaultProps = {
  className: '',
  type: 'text',
  name: null,
  placeholder: 'Placeholder',
  label: null,
  required: false,
  error: null,
};

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'date', 'time']),
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
};
