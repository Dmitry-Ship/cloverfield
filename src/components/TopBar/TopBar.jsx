import React, { PropTypes } from 'react';

import styles from './TopBar.css';

import { Link } from 'react-router';

import Row from '../basic/Row';
import Icon from '../basic/Icon';
import NavBar from '../basic/NavBar';
import Heading from '../basic/Heading';

const TopBar = ({ appName, navBarItems }) => (
  <Row align={'space-between'} className={styles.topBar} >
    <Heading size={2}>
      <Link className={styles.logo} to="/" >{appName}</Link>
    </Heading>

    <NavBar items={navBarItems}>
      {/* <SideMenuContainer  />
      <ProfileContainer /> */}
    </NavBar>
  </Row>
)

export default TopBar;

TopBar.propTypes = {
  appName: PropTypes.string.isRequired,
  navBarItems: PropTypes.arrayOf(PropTypes.object),

};
