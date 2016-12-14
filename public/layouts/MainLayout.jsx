import React, { Component } from 'react';

import { Link } from 'react-router';

import { layout, main } from './MainLayout.styl';

import TopBarContainer from '../containers/TopBarContainer';

const MainLayout = ({ children }) => (
  <div className={layout}>
    <TopBarContainer />
    <main className={main}>
      {children}
    </main>
  </div>
)

export default MainLayout;
