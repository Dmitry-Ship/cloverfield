import React, { PropTypes } from 'react';

import styles from './Button.styl';

import Icon from '../Icon';

const Button = ({
  type,
  label,
  onClick,
  className,
  kind,
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
        <span>{label}</span>
        {children}
        {iconName && <Icon name={iconName} />}
      </div>
    </button>
);

export default Button;

Button.defaultProps = {
  kind: 'primary',
  className: '',
  type: 'button',
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
