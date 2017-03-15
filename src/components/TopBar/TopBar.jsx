import React, { PropTypes } from 'react';
import { topBar } from './TopBar.scss';

import NavBar from '../basic/NavBar';
import Logo from '../basic/Logo';

import ProfileContainer from '../../containers/ProfileContainer';

const TopBar = ({ navBarItems, isLoggedIn }) => {
  const style = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  return (
    <header style={style} className={topBar} >
      <Logo />

      <NavBar items={navBarItems} >
        {isLoggedIn && <ProfileContainer />}
      </NavBar>
    </header>
  );
};

export default TopBar;

TopBar.propTypes = {
  navBarItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
