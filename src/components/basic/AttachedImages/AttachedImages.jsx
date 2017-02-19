import React, { PropTypes } from 'react';

import { deleteIcon, singleImage, image, wrapper } from './AttachedImages.styl';

import Icon from '../Icon';

const AttachedImages = ({ images, onDelete, className }) => (
  <div className={wrapper}>
    {images.map(item => (
      <div key={item} className={`${singleImage} ${className}`} >
        <Icon name="close" className={deleteIcon} onClick={() => onDelete(item)} />
        <img className={image} src={item} alt="" />
      </div>
    ))}
  </div>

);

export default AttachedImages;

AttachedImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};
