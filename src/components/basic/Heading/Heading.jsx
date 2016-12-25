import React, { PropTypes } from 'react';

const Heading = ({ size, className, children }) => {
  const Tag = `h${size}`;
  return (<Tag className={className}>{children}</Tag>);
};

export default Heading;

Heading.defaultProps = {
  size: 1,
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  size: PropTypes.number,
};
