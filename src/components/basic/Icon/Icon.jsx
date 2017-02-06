import React, { PropTypes } from 'react';

const Icon = ({ children, name, className, onClick, size }) => {
  const style = {
    fontSize: size,
  };
  return (
    <i
      style={style}
      onClick={onClick}
      className={`${className} material-icons`}
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
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
};
