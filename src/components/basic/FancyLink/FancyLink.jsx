import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FancyLink.scss';

const FancyLink = ({ children, className, ...rest }) => (
  <Link className={`${styles.link} ${className}`} {...rest} >
    <h3 >{children}</h3>
  </Link>
);

FancyLink.defaultProps = {
  className: '',
  to: '#',
};

FancyLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  to: PropTypes.string,
};

export default FancyLink;
