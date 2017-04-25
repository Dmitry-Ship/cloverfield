import PropTypes from 'prop-types';
import React from 'react';
import { deleteIcon, singleImage, image, wrapper } from './AttachedImages.scss';
import Icon from '../Icon';

const AttachedImages = ({ images, onDelete, className, expandImage }) => (
  <div className={wrapper}>
    {images.map((item, i) => (
      <div key={item.id} className={`${singleImage} ${className}`} >
        <Icon name="close" className={deleteIcon} onClick={() => onDelete(item.id)} />
        <img className={image} src={item.url} alt="" onClick={() => expandImage(images, i)} />
      </div>
    ))}
  </div>
);

export default AttachedImages;

AttachedImages.defaultProps = {
  className: '',
};

AttachedImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  expandImage: PropTypes.func.isRequired,
  className: PropTypes.string,
};
