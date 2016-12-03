import React, { PropTypes } from 'react';

import styles from './MediaObject.css';
// import styles from './MediaObject.styl';

import Icon from '../Icon';

const MediaObject = ({ className, mediaClass, contentClass, name, title, children }) => (
  <div className={`${styles.media} ${className}`}>
    <Icon name={name} className={`${styles.figure} ${mediaClass}`} />
    <div className={`${styles.body} ${contentClass}`}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  </div>
);

export default MediaObject;

MediaObject.defaultProps = {
  name: 'face'
}

MediaObject.propTypes = {
  className: PropTypes.string,
  mediaClass: PropTypes.string,
  contentClass: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any.isRequired


}
