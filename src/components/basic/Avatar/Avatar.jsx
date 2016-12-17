import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import { avatar, image } from './Avatar.styl';

const Avatar = ({ user, src, className }) => (
  <Link className={avatar} to="#">
    <img className={`${image} ${className}`} src={src} alt="" />
  </Link>
);

export default Avatar;

Avatar.propTypes = {
  src: PropTypes.string,
  user: PropTypes.string,
  className: PropTypes.string,
};
