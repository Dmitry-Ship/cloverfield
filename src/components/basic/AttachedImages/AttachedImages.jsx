import React, { PropTypes } from 'react';

import { deleteIcon, singleImage, image, wrapper } from './AttachedImages.scss';

import Icon from '../Icon';

// previews are data urls, so they are not being displayed with "/" simbol before,
// whereas images are simple names, so they need "/" to access public path from any route
const AttachedImages = ({ previews, images, onDelete, className }) => (
  <div className={wrapper}>
    {images && images.map(item => (
      <div key={item} className={`${singleImage} ${className}`} >
        <Icon name="close" className={deleteIcon} onClick={() => onDelete(item)} />
        <img className={image} src={`/${item}`} alt="" />
      </div>
    ))}
    {previews && previews.map(item => (
      <div key={item} className={`${singleImage} ${className}`} >
        <Icon name="close" className={deleteIcon} onClick={() => onDelete(item)} />
        <img className={image} src={item} alt="" />
      </div>
    ))}
  </div>
);

export default AttachedImages;

AttachedImages.defaultProps = {
  className: null,
  images: null,
  previews: null,
};

AttachedImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  previews: PropTypes.arrayOf(PropTypes.string),
  onDelete: PropTypes.func.isRequired,
  className: PropTypes.string,
};
