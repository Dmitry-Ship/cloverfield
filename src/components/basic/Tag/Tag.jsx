import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { tag, link, icon } from './Tag.styl';

import Icon from '../Icon';

const Tag = ({ tagText, onDeleteTag }) => (
  <div className={tag}>
    <Link className={link} to={`/tags/${tagText}`}>
      {tagText}
    </Link>
    <Icon className={icon} onClick={() => onDeleteTag(tagText)} name="close" size="18px" />
  </div>
);

export default Tag;

Tag.propTypes = {
  onDeleteTag: PropTypes.func.isRequired,
  tagText: PropTypes.string.isRequired,
};
