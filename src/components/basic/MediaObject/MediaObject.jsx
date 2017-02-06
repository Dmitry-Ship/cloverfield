import React, { PropTypes } from 'react';

import { media, figure, body, title } from './MediaObject.styl';

import Icon from '../Icon';

const MediaObject = ({ className, mediaClass, contentClass, name, titleText, children }) => (
  <div className={`${media} ${className}`}>
    <Icon name={name} className={`${figure} ${mediaClass}`} />
    <div className={`${body} ${contentClass}`}>
      <h3 className={title}>{titleText}</h3>
      {children}
    </div>
  </div>
);

export default MediaObject;

MediaObject.defaultProps = {
  name: 'face',
  className: '',
  mediaClass: '',
  contentClass: '',
};

MediaObject.propTypes = {
  className: PropTypes.string,
  mediaClass: PropTypes.string,
  contentClass: PropTypes.string,
  name: PropTypes.string,
  titleText: PropTypes.string,
  children: PropTypes.any.isRequired,
};
