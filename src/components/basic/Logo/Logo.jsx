import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import { logo } from './Logo.scss';

const Logo = ({ children, className }) => (
  <Link className={`${logo} ${className}`} to="/" >
    {children}
  </Link>
);

export default Logo;
