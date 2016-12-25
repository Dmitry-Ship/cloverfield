import React, { Component, PropTypes } from 'react';

import { textField } from './TextField.styl';

export default class TextField extends Component {
  constructor(){
    super();
  }

  render() {
    const {
      type,
      name,
      placeholder,
      required,
      onChange,
      onFocus,
      onBlur,
      label,
      className } = this.props;
    return (
      <input
        className={`${textField} ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />

    );
  }
}

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
};
