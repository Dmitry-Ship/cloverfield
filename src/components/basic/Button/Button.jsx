import React, { PropTypes } from 'react';

import styles from './Button.scss';

import Icon from '../Icon';

const Button = ({
  className,
  kind,
  isLoading,
  iconName,
  size,
  children,
  ...rest }) => (
    <button {...rest} className={`${styles[kind]} ${styles[size]} ${className}`} >
      {isLoading ? <Icon name="access_time" /> : <span>{children}</span>}
      {iconName && <Icon name={iconName} />}
    </button>
);

export default Button;

Button.defaultProps = {
  kind: 'primary',
  className: '',
  type: 'submit',
  disabled: false,
  children: 'Submit',
  iconName: null,
  isLoading: false,
  onClick: null,
  size: 'normal',
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
  iconName: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['normal', 'small']),
  isLoading: PropTypes.bool,
};
