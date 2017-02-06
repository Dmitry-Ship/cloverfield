import React, { PropTypes } from 'react';

import { layout, main } from './MainLayout.styl';
import TopBarContainer from '../../containers/TopBarContainer';

const MainLayout = ({ children }) => (
  <div className={layout}>
    <TopBarContainer />
    <main className={main}>
      {children}
    </main>
  </div>
);

export default MainLayout;

MainLayout.defaultProps = {
  children: null,
};

MainLayout.propTypes = {
  children: PropTypes.element,
};
