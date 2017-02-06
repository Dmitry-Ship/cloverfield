import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { topBar, logo, navBar } from './TopBar.styl';

import Row from '../basic/Row';
import NavBar from '../basic/NavBar';
import ProfileContainer from '../../containers/ProfileContainer';
import SideMenuContainer from '../../containers/SideMenuContainer';

const TopBar = ({ appName, navBarItems, isLoggedIn, onClick }) => (
  <Row align="space-between" className={topBar} >
    <SideMenuContainer />
    <h2>
      <Link className={logo} to="/" >{appName}</Link>
    </h2>
    <NavBar className={navBar} items={navBarItems}>
      {isLoggedIn && <ProfileContainer />}
    </NavBar>
  </Row>
);

export default TopBar;

TopBar.propTypes = {
  appName: PropTypes.string.isRequired,
  navBarItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};
