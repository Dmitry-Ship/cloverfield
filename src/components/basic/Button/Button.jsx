import React, { PropTypes } from 'react';

import styles from './Button.css'

const Button = ({ type,
                  label,
                  onClick,
                  className,
                  kind,
                  icon,
                  disabled,
                  children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[kind]} ${className}`} >
      <div>
        <span>{label}</span>
        {icon && <i className="material-icons">{icon}</i>}
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
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.any,
  icon: PropTypes.string,

}
