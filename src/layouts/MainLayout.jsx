import React, { Component } from 'react';

import { Link } from 'react-router';

import styles from './MainLayout.css';

import TopBarContainer from '../containers/TopBarContainer';

const MainPage = ({children}) => (
  <div className='main-layout'>
    <TopBarContainer />
    <main className={styles.main}>
      {children}
    </main>
  </div>
)

export default MainPage;
