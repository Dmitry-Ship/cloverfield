import React, { PropTypes } from 'react';

const Card = ({ onClick, className, children }) => (
  <div onClick={onClick} className={className} >
    {children}
  </div>
);

export default Card;

Card.defaultProps = {
  className: '',
};

Card.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};
