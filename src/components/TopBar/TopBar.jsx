import React, { PropTypes } from 'react';

import { topBar, logo, button } from './TopBar.scss';
import NavBar from '../basic/NavBar';
import Logo from '../basic/Logo';
import Button from '../basic/Button';
import ProfileContainer from '../../containers/ProfileContainer';
import SearchContainer from '../../containers/SearchContainer';

const TopBar = (props) => {
  const style = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  return (
    <header style={style} className={topBar} >
      <NavBar links={props.links} />
      <Logo className={logo} />
      <div style={style} >

        <SearchContainer />
        {props.isLoggedIn ?
          <ProfileContainer /> :
          <div>
            <Button size="small" className={button} onClick={props.openLoginModal} >Login</Button>
            <Button size="small" className={button} kind="secondary" onClick={props.openSignUpModal} >Join</Button>
          </div>}

      </div>

    </header>
  );
};

export default TopBar;

TopBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
