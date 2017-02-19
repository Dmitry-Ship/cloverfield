import React, { PropTypes } from 'react';
import { topBar, navBar } from './TopBar.styl';

import Row from '../basic/Row';
import NavBar from '../basic/NavBar';
import Logo from '../basic/Logo';

import ProfileContainer from '../../containers/ProfileContainer';

const TopBar = ({ appName, navBarItems, isLoggedIn }) => (
  <Row align="space-between" className={topBar} >
    <Logo>{appName}</Logo>

    <NavBar className={navBar} items={navBarItems} >
      {isLoggedIn && <ProfileContainer />}
    </NavBar>
  </Row>
);

export default TopBar;

TopBar.propTypes = {
  appName: PropTypes.string.isRequired,
  navBarItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
