import React, { PropTypes } from 'react';

import { Link } from 'react-router-dom';

import { logo } from './Logo.scss';

const Logo = ({ className, to }) => (
  <Link className={`${logo} ${className}`} to={to} >
    Cloverfield
  </Link>
);

export default Logo;

Logo.defaultProps = {
  className: null,
  to: '/',
};

Logo.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
};
