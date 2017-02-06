import React, { PropTypes } from 'react';

import { userinfo, profile, avatar, popUpMenu } from './Profile.styl';

import Avatar from '../basic/Avatar';
import PopUpMenu from '../basic/PopUpMenu';

const Profile = ({ user, items, className, children }) => (
  <div className={`${profile} ${className}`} >
    <Avatar className={avatar} src={user.userpic} />
    <p className={userinfo} >{user.username}</p>
    {children}
    <PopUpMenu className={popUpMenu} items={items} position="bottom" />
  </div>
);

export default Profile;

Profile.defaultProps = {
  className: '',
  children: null,
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.any,
};
