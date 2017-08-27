import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tag.scss';

const Tag = ({ tagText, onDeleteTag }) => (
  <div className={styles.tag}>
    <Link className={styles.link} to={`/tags/${tagText}`}>
      {tagText}
    </Link>
    <span className={styles.icon} onClick={() => onDeleteTag(tagText)}>✕</span>
  </div>
);

export default Tag;

Tag.propTypes = {
  onDeleteTag: PropTypes.func.isRequired,
  tagText: PropTypes.string.isRequired,
};
