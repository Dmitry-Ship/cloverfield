import React, { PropTypes } from 'react';

import { deleteIcon, singleImage, image, wrapper } from './AttachedImages.scss';

import Icon from '../Icon';

const AttachedImages = ({ images, onDelete, className, expandImage }) => {
  const isDataURL = (s) => {
    const regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
    if (s.match(regex)) {
      return s;
    }
    return `/${s}`;
  };

  return (
    <div className={wrapper}>
      {images && images.map(item => (
        <div key={item} className={`${singleImage} ${className}`} onClick={() => expandImage(item)} >
          <Icon name="close" className={deleteIcon} onClick={() => onDelete(item)} />
          <img className={image} src={isDataURL(item)} alt="" />
        </div>
      ))}
    </div>
  );
};

export default AttachedImages;

AttachedImages.defaultProps = {
  className: null,
  images: null,
  previews: null,
};

AttachedImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  onDelete: PropTypes.func.isRequired,
  className: PropTypes.string,
};
