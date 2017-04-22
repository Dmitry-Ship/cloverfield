import PropTypes from 'prop-types';
import React from 'react';

import { deleteIcon, singleImage, image, wrapper } from './AttachedImages.scss';


import Icon from '../Icon';


const AttachedImages = ({ images, onDelete, className, expandImage, editable }) => {

  function getWidth(items) {
    return `${100 / items.length}%`;
   
  }

  const style = {
    width: getWidth(images),
  }

  return (
    <div className={wrapper}>
        {images.map((item, i) => (
          <div key={item.id} className={`${singleImage} ${className}`} >
            {editable && <Icon name="close" className={deleteIcon} onClick={() => onDelete(item.id)} />}
            <img className={image} src={item.url} alt="" onClick={() => expandImage(images, i)} />
          </div>
        ))}
    </div>
  );
}


export default AttachedImages;

AttachedImages.defaultProps = {
  className: null,
  editable: true,
};

AttachedImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  // onDelete: PropTypes.func.isRequired,
  // expandImage: PropTypes.func.isRequired,
  className: PropTypes.string,
  editable: PropTypes.bool,
};
