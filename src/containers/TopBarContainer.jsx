import React, { Component } from 'react';

import TopBar from '../components/TopBar/TopBar';

const TopBarContainer = () => {
  const navBarItems = [
    { label: 'Main', icon: 'home', to: '/' },
    { label: 'About', icon: 'search', to: '/about' }
  ]

  return (
    <TopBar appName="My App" navBarItems={navBarItems}  />
  )
}

export default TopBarContainer;
