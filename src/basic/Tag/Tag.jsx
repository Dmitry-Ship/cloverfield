import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import Icon from '../Icon';

const Tag = ({ tag, id, onRemoveTag }) => {

  const removeTag = () => onRemoveTag(tag, id)

  return (
    <div className="tag">
      <Link className='tag__link' to={`/tags/${tag}`}>
        {tag}
      </Link>
      <Icon className='tag__icon' onClick={removeTag} name='close' size='18px'/>
    </div>
  )
}

export default Tag;

Tag.propTypes = {
  onRemoveTag: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
