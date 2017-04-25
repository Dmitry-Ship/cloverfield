import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from './Logo.scss';

const Logo = ({ className, ...rest }) => (
  <Link className={`${logo} ${className}`} {...rest} >
    Cloverfield
  </Link>
);

export default Logo;

Logo.defaultProps = {
  className: '',
  to: '/',
};

Logo.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
};
