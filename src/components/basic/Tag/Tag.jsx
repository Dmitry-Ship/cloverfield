import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { tag, link, icon } from './Tag.scss';

const Tag = ({ tagText, onDeleteTag }) => (
  <div className={tag}>
    <Link className={link} to={`/tags/${tagText}`}>
      {tagText}
    </Link>
    <span className={icon} onClick={() => onDeleteTag(tagText)}>✕</span>
  </div>
);

export default Tag;

Tag.propTypes = {
  onDeleteTag: PropTypes.func.isRequired,
  tagText: PropTypes.string.isRequired,
};
