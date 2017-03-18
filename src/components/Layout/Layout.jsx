import React, { PropTypes } from 'react';

import { layout } from './Layout.scss';

import ExpandedImageContainer from '../../containers/ExpandedImageContainer';

const Layout = ({ children }) => (
  <div className={layout}>
    <ExpandedImageContainer />
    {children}
  </div>
);

export default Layout;

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  // children: PropTypes.element,
};
