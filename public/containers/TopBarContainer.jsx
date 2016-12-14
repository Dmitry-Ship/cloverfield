import React, { Component } from 'react';

import TopBar from '../components/TopBar';

const TopBarContainer = () => {
  const navBarItems = [
    { label: 'Main', iconName: 'home', to: '/' },
    { label: 'About', iconName: 'search', to: '/about' }
  ]

  return (
    <TopBar appName="My App" navBarItems={navBarItems}  />
  )
}

export default TopBarContainer;
