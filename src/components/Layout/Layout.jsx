import PropTypes from 'prop-types';
import React from 'react';
import styles from './Layout.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    {children}
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
