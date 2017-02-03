import React, { Component, PropTypes } from 'react';

import { textField } from './TextField.styl';

export default class TextField extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    const {
      type,
      name,
      placeholder,
      required,
      onFocus,
      value,
      onBlur,
      label,
      className } = this.props;
    return (
      <div>
        {label && <label >{label}</label>}
        <input
          className={`${textField} ${className}`}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          required={required}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

TextField.defaultProps = {
  className: '',
  type: 'text',
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
};
