import PropTypes from 'prop-types';
import React from 'react';

import { layout } from './Layout.scss';

const Layout = ({ children }) => (
  <div className={layout}>
    {children}
  </div>
);

export default Layout;

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.any,
};
