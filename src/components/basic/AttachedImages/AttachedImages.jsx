import PropTypes from 'prop-types';
import React from 'react';
import styles from './AttachedImages.scss';
import Icon from '../Icon';

const AttachedImages = ({ images, onDelete, className, expandImage }) => (
  <div className={styles.wrapper}>
    {images.map((item, i) => (
      <div key={item.id} className={`${styles.singleImage} ${className}`} >
        <Icon name="close" className={styles.deleteIcon} onClick={() => onDelete(item.id)} />
        <img
          className={styles.image}
          src={item.url}
          alt=""
          onClick={() => expandImage(images, i)}
        />
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
