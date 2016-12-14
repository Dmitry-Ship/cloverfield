import React, { PropTypes } from 'react';

import styles from './Profile';

import Avatar from '../basic/Avatar';
import PopUpMenu from '../basic/PopUpMenu';

const Profile = ({ user, src, items, className }) => (
  <div className={`${styles.profile} ${className}`} >
    <Avatar className={styles.avatar} src={src} />
    <p className={styles.userinfo} >{user.username}</p>
    <PopUpMenu className={styles.popUpMenu} items={items}/>
  </div>
)

export default Profile;

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string
}
