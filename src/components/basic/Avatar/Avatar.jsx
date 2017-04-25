import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import noUserPic from './noUserPic.png';

const Avatar = ({ src, className, fallBack, to }) => (
  <Link style={{ display: 'block' }} to={to}>
    <img style={{ display: 'block' }} className={className} src={src ? `${src}` : fallBack} alt="" />
  </Link>
);

export default Avatar;

Avatar.defaultProps = {
  fallBack: noUserPic,
  className: '',
  to: '#',
};

Avatar.propTypes = {
  src: PropTypes.string,
  fallBack: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
};
