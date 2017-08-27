import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './TopBar.scss';
import NavBar from 'components/basic/NavBar';
import Logo from 'components/basic/Logo';
import Button from 'components/basic/Button';
import ProfileContainer from 'containers/ProfileContainer';
import SearchContainer from 'containers/SearchContainer';
import Icon from 'components/basic/Icon';

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
        <div className={styles.tagIndicator}>
          <Link to="/" >
            <div className={styles.iconWrapper} >
              <Icon name="arrow_back" className={styles.icon} />
            </div>
          </Link>
          <h3 className={styles.tagText} >TAG: {tag}</h3>
        </div>
      );
    }
    return <Logo className={styles.logo} />;
  }
  return (
    <header style={style} className={styles.topBar} >
      <NavBar links={links} />
      {renderLogo()}
      <div style={style} >
        {isLoggedIn &&
          <NavLink to="/search" >
            <div className={styles.iconWrapper} >
              <Icon name="search" className={styles.icon} />
            </div>
          </NavLink>}

        {isLoggedIn ?
          <ProfileContainer /> :
          <div>
            <Button size="small" onClick={openSignUpModal} >Join</Button>
            <Button size="small" kind="secondary" className={styles.loginButton} onClick={openLoginModal} >Login</Button>
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
