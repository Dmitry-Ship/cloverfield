import React, { PropTypes } from 'react';

import { Link } from 'react-router';

const Avatar = ({ src, className, fallBack, to }) => (
  <Link style={{ display: 'block' }} to={to}>
    <img style={{ display: 'block' }} className={className} src={`/${src || fallBack}`} alt="" />
  </Link>
);

export default Avatar;

Avatar.defaultProps = {
  fallBack: 'noUserPic.png',
  className: '',
};

Avatar.propTypes = {
  src: PropTypes.string,
  fallBack: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
};
