import PropTypes from 'prop-types';
import React from 'react';
import styles from './TextField.scss';

const TextField = ({ label, className, error, ...rest }) => (
  <div className={`${styles.wrapper} ${className}`}>
    {label && <label className={styles.topLabel} >{label}</label>}
    <input className={styles.textField} {...rest} />
    {error && <p className={styles.errorMessage}>{error}</p>}
  </div>
);

export default TextField;

TextField.defaultProps = {
  className: '',
  type: 'text',
  placeholder: 'Placeholder',
  label: null,
  error: null,
};

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'date', 'time']),
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
