import PropTypes from 'prop-types';
import React from 'react';
import styles from './GeneralInfoCard.scss';

const GeneralInfoCard = ({ tags, notes, images, className }) => (
  <div className={`${styles.card} ${className}`} >
    <h2 className={styles.field} >📝Notes: {notes}</h2>
    <h2 className={styles.field} >🖼️Images: {images}</h2>
    <h2 className={styles.field} >🏷️Tags: {tags}</h2>
  </div>
);

export default GeneralInfoCard;

GeneralInfoCard.defaultProps = {
  className: '',
};

GeneralInfoCard.propTypes = {
  tags: PropTypes.number.isRequired,
  notes: PropTypes.number.isRequired,
  images: PropTypes.number.isRequired,
  className: PropTypes.string,
};
