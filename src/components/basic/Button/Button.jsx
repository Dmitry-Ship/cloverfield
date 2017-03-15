import React, { PropTypes } from 'react';

import styles from './Button.scss';

import Icon from '../Icon';

const Button = ({
  type,
  label,
  onClick,
  className,
  kind,
  isLoading,
  iconName,
  disabled,
  children }) => (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles[kind]} ${className}`}
    >
      <div>
        {isLoading ? <Icon name="access_time" /> : <span>{label}</span>}
        {children}
        {iconName && <Icon name={iconName} />}
      </div>
    </button>
);

export default Button;

Button.defaultProps = {
  kind: 'primary',
  className: '',
  type: 'submit',
  disabled: false,
  children: null,
  iconName: null,
  label: 'Submit',
  onClick: null,
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.element,
  iconName: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary']),
};
