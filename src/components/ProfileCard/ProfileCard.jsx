import PropTypes from 'prop-types';
import React from 'react';
import styles from './ProfileCard.scss';
import Avatar from 'components/basic/Avatar';
import Heading from 'components/basic/Heading';

const ProfileCard = ({ user, className }) => (
  <div className={`${styles.card} ${className}`} >
    <Heading>Here is your profile info and statistics</Heading>
    <Avatar className={styles.avatar} src={user.userpic} />
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
