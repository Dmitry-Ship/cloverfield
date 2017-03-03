import React, { PropTypes } from 'react';

import { card, avatar } from './ProfileCard.scss';
import Card from '../basic/Card';
import Avatar from '../basic/Avatar';

const ProfileCard = ({ user, className }) => (
  <Card className={`${card} ${className}`} >
    <Avatar className={avatar} src={user.userpic} />
    <h2>{user.fullName}</h2>
    <h3>@{user.username}</h3>

  </Card>
);

export default ProfileCard;

ProfileCard.defaultProps = {
  className: '',
};

ProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string,
};
