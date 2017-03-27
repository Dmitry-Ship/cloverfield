import React, { PropTypes } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { topBar, logo, loginButton, iconWrapper, icon, tagIndicator, tagText } from './TopBar.scss';
import NavBar from '../basic/NavBar';
import Logo from '../basic/Logo';
import Button from '../basic/Button';
import ProfileContainer from '../../containers/ProfileContainer';
import SearchContainer from '../../containers/SearchContainer';
import Icon from '../basic/Icon';

const TopBar = ({ openLoginModal, openSignUpModal, isLoggedIn, links, isInSearchMode, tag }) => {
  const style = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  function renderLogo() {
    if (isInSearchMode && isLoggedIn) {
      return <SearchContainer />;
    } else if (tag && isLoggedIn) {
      return (
        <div className={tagIndicator}>
          <Link to="/" >
            <div className={iconWrapper} >
              <Icon name="arrow_back" className={icon} />
            </div>
          </Link>
          <h3 className={tagText} >TAG: {tag}</h3>
        </div>
      )
    } else {
      return <Logo className={logo} />;
    }
  }
  return (
    <header style={style} className={topBar} >
      <NavBar links={links} />
      {renderLogo()}
      <div style={style} >
        {isLoggedIn &&
          <NavLink to="/search" >
            <div className={iconWrapper} >
              <Icon name="search" className={icon} />
            </div>
          </NavLink>}

        {isLoggedIn ?
          <ProfileContainer /> :
          <div>
            <Button size="small" onClick={openSignUpModal} >Join</Button>
            <Button size="small" kind="secondary" className={loginButton} onClick={openLoginModal} >Login</Button>
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
  tag: PropTypes.string,
  
};
