import React, { PropTypes } from 'react';

import { deleteIcon, singleImage, image, wrapper } from './AttachedImages.scss';

import Icon from '../Icon';

const AttachedImages = ({ images, onDelete, className, expandImage }) => {
  const isDataURL = (s) => {
    const regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
    if (s.match(regex)) { return s; }
    return `${s}`;
  };

  return (
    <div className={wrapper}>
      {images && images.map((item, i) => (
        <div key={item.id} className={`${singleImage} ${className}`} >
          <Icon name="close" className={deleteIcon} onClick={() => onDelete(item.id)} />
          <img className={image} src={isDataURL(item.url)} alt="" onClick={() => expandImage(images, i)} />
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
  images: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  expandImage: PropTypes.func.isRequired,
  className: PropTypes.string,
};
