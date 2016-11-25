import React, { PropTypes } from 'react';

import Icon from '../Icon';

const MediaObject = ({className, mediaClass, contentClass, name, title, children }) => (
  <div className={`media-object ${className}`}>
    <Icon name="face" className={`media-object__figure ${mediaClass}`} />
    <div className={`media-object__body ${contentClass}`}>
      <h3 className="media-object__title">{title}</h3>
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
