import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import { avatar, image } from './Avatar.styl';

const Avatar = ({ src, className }) => (
  <Link className={avatar} to="#">
    <img className={`${image} ${className}`} src={src} alt="" />
  </Link>
);

export default Avatar;

Avatar.defaultProps = {
  src: '/noUserPic.png',
};

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};
