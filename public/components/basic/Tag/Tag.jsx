import React, { PropTypes } from 'react';

import { tag, link, icon } from './Tag.styl';

import { Link } from 'react-router';

import Icon from '../Icon';

const Tag = ({ tagText, id, onRemoveTag }) => {

  const removeTag = () => onRemoveTag(tagText, id)

  return (
    <div className={tag}>
      <Link className={link} to={`/tags/${tagText}`}>
        {tagText}
      </Link>
      <Icon className={icon} onClick={removeTag} name='close' size='18px'/>
    </div>
  )
}

export default Tag;

Tag.propTypes = {
  onRemoveTag: PropTypes.func.isRequired,
  tagText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
