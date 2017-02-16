import React, { PropTypes } from 'react';

const Icon = ({ children, name, className, onClick }) => (
  <i onClick={onClick} className={`${className} material-icons`} >
    {name}
    {children}
  </i>
);


export default Icon;

Icon.defaultProps = {
  className: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
