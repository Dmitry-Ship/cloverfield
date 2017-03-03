import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { item, profile, avatar, popUpMenu, link, name } from './Profile.scss';

import Avatar from '../basic/Avatar';
import PopUpMenu from '../basic/PopUpMenu';

const Profile = ({ user, className, onClick, profileRoute, editRoute }) => (
  <div className={`${profile} ${className}`} >
    <Avatar className={avatar} src={user.userpic} />
    <PopUpMenu className={popUpMenu} position="bottom" >
      <div className={item} >
        <Link to={profileRoute} className={link} >
          <span className={name} >{user.fullName || user.username}</span>
          <span>View Profile</span>
        </Link>
      </div>
      <div className={item} >
        <Link to={editRoute} className={link} >Edit Profile</Link>
      </div>
      <div className={item} onClick={onClick} >
        <p className={link} >Log Out</p>
      </div>
    </PopUpMenu>
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

  children: PropTypes.any,
};
