import React, { PropTypes } from 'react';

import styles from './Button.styl'

import Icon from '../Icon';

const Button = ({ type,
                  label,
                  onClick,
                  className,
                  kind,
                  name,
                  disabled,
                  children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles[kind]} ${className}`} >
      <div>
        <span>{label}</span>
        {name && <Icon name={name} />}
      </div>
    </button>
  )
}

export default Button;

Button.defaultProps = {
  disabled: false,
  kind: 'primary'
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
  icon: PropTypes.string,

}
