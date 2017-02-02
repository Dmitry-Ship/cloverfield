import React, { PropTypes } from 'react';

const Icon = ({ children, name, onClick, className, size }) => {
  const style = {
    fontSize: size,
  };
  return (
    <i
      style={style}
      onClick={onClick}
      className={`icon ${className} material-icons`}
    >
      {name}
      {children}
    </i>
  );
};

export default Icon;

Icon.defaultProps = {
  size: '24px',
  className: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.string,
};
