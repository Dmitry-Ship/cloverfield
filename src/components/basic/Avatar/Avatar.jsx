import React, { PropTypes } from 'react';

import { Link } from 'react-router';

const Avatar = ({ src, className }) => (
  <Link style={{ display: 'block' }} to="#">
    <img style={{ display: 'block' }} className={className} src={`/${src}`} alt="" />
  </Link>
);

export default Avatar;

Avatar.defaultProps = {
  src: 'noUserPic.png',
  className: '',
};

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};
