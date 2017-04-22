import PropTypes from 'prop-types';
import React from 'react';

import { wrapper, textField, errorMessage, topLabel } from './TextField.scss';

const TextField = ({ label, className, error, ...rest }) => (
  <div className={`${wrapper} ${className}`}>
    {label && <label className={topLabel} >{label}</label>}
    <input className={textField} {...rest} />
    <p className={errorMessage}>{error}</p>
  </div>
);

export default TextField;

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
