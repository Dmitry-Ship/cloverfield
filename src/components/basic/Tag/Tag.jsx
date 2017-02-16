import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { tag, link, icon } from './Tag.styl';

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
