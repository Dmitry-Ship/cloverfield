import React, { PropTypes } from 'react';

import { media, figure, body, title } from './MediaObject.styl';

import Icon from '../Icon';
import Heading from '../Heading';

const MediaObject = ({ className, mediaClass, contentClass, name, titleText, children }) => (
  <div className={`${media} ${className}`}>
    <Icon name={name} className={`${figure} ${mediaClass}`} />
    <div className={`${body} ${contentClass}`}>
      <Heading size={3} className={title}>{titleText}</Heading>
      {children}
    </div>
  </div>
);

export default MediaObject;

MediaObject.defaultProps = {
  name: 'face',
  className: '',
  contentClass: ''
}

MediaObject.propTypes = {
  className: PropTypes.string,
  mediaClass: PropTypes.string,
  contentClass: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any.isRequired
}
