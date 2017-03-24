import React, { PropTypes } from 'react';

import { topBar, logo, button, iconWrapper, icon } from './TopBar.scss';
import NavBar from '../basic/NavBar';
import Logo from '../basic/Logo';
import Button from '../basic/Button';
import ProfileContainer from '../../containers/ProfileContainer';
import SearchContainer from '../../containers/SearchContainer';
import { NavLink } from 'react-router-dom';
import Icon from '../basic/Icon';
const TopBar = ({ openLoginModal, openSignUpModal, isLoggedIn, links, isInSearchMode }) => {
  const style = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  return (
    <header style={style} className={topBar} >
      <NavBar links={links} />
      {!isInSearchMode && <Logo className={logo} />}
      <div style={style} >
            <NavLink to={isInSearchMode ? '/' : '/search'} >
              <div className={iconWrapper} >
                <Icon name={isInSearchMode ? 'close' : 'search'} className={icon} />
              </div>
            </NavLink>

        {isLoggedIn && <SearchContainer />}
        {isLoggedIn ?
          <ProfileContainer /> :
          <div>
            <Button
              size="small"
              className={button}
              onClick={openSignUpModal}
            >
            Join
            </Button>
            <Button size="small" kind="secondary" className={button} onClick={openLoginModal} >Login</Button>
          </div>}
      </div>
    </header>
  );
};

export default TopBar;

TopBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  openLoginModal: PropTypes.func.isRequired,
  openSignUpModal: PropTypes.func.isRequired,
  isInSearchMode: PropTypes.bool.isRequired,
};
