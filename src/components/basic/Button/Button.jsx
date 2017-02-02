import React, { PropTypes } from 'react';

import styles from './Button.styl';

import Icon from '../Icon';

const Button = ({ type,
                  label,
                  onClick,
                  className,
                  kind,
                  name,
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
      {name && <Icon name={name} />}
    </div>
  </button>
);

export default Button;

Button.defaultProps = {
  kind: 'primary',
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.element,
  name: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary']),
};
