import React, { PropTypes } from 'react';

import { card, avatar } from './ProfileCard.scss';
import Avatar from '../basic/Avatar';
import Heading from '../basic/Heading';

const ProfileCard = ({ user, className }) => (
  <div className={`${card} ${className}`} >
    <Heading>Here is your profile info and statistics</Heading>
    <Avatar className={avatar} src={user.userpic} />
    <h2>{user.fullName}</h2>
    <h3>@{user.username}</h3>
  </div>
);

export default ProfileCard;

ProfileCard.defaultProps = {
  className: '',
};

ProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string,
};
