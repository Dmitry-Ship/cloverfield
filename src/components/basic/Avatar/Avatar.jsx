import React, { PropTypes } from 'react';

import styles from './Avatar';

import { Link } from 'react-router';

const Avatar = ({user, src, className}) => (
  <Link className={styles.avatar} to='#'>
    <img className={`${styles.image} ${className}`} src={src} alt=""/>
  </Link>
)

export default Avatar;

Avatar.propTypes = {
  src: PropTypes.string,
  user: PropTypes.string,
  className: PropTypes.string,
}
