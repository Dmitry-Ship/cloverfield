import React, { Component, PropTypes } from 'react';

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
        className={`text-field ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
         />

    )
  }
}

TextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
}
