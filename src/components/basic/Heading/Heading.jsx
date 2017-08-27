import PropTypes from 'prop-types';
import React from 'react';

import styles from './Heading.scss';

const Heading = ({ className, children }) => (
  <h1 className={`${className} ${styles.heading}`}>{children}</h1>
);

export default Heading;

Heading.defaultProps = {
  className: '',
};

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};
