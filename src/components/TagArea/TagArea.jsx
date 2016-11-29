import React, { Component, PropTypes } from 'react';

import styles from './TagArea.css';

import PopUpMenu from '../basic/PopUpMenu';
import Tag from '../basic/Tag';

export default class TagArea extends Component {
  constructor(){
    super();
    this.emitChange = this.emitChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.setTag = this.setTag.bind(this);
  }

  emitChange(e){
    const curKey = e.which;
    const value = e.target.innerHTML

    if (value === '' && curKey === 8) {

      const removed = this.props.tags.slice(-1)[0]

      this.props.onRemoveTag(removed, this.props.id)

    }

    if (curKey === 32 || curKey === 13) {
      e.preventDefault()
      if (value === '' || value === ' ') return;

      const content = e.target.innerHTML.trim();

      this.props.onAddTag(content, this.props.id);

      e.target.innerHTML = '';
    }
  }

  setTag(e) {
    value = e.target.innerHTML;

    this.props.onSetTag(value, this.props.id);
  }

  handleBlur(e) {
    const value = e.target.innerHTML;

    if (value === '' || value === ' ') return;

    this.props.onAddTag(value, this.props.id);


    e.target.innerHTML = '';
  }

  render() {
    const { tags, allTags, onRemoveTag, id } = this.props;
    const modified = tags.join('');

    const suggTags = allTags.map(tag => tag.name);
    const list = []
    for (let i = 0; i < suggTags.length; i++) {
      list.push({text: suggTags[i], func: this.setTag })
    }

    return (
      <div className={styles.tagArea}>
        {tags.map((tag, i) => {
          return (
            <Tag
              tag={tag}
              id={id}
              key={i}
              onRemoveTag={onRemoveTag} />
        )})}

        <div className={styles.input}>
          <div
            contentEditable
            onKeyDown={this.emitChange}
            onBlur={this.handleBlur}
            className={styles.input__field}>
          </div>
          {/* <input
            type='text'
            maxLength={10}
            onKeyDown={this.emitChange}
            onBlur={this.handleBlur}
            className="tag-area-input" /> */}

          <PopUpMenu className={styles.input__suggestions} items={list} />

        </div>

      </div>
    )
  }
}

TagArea.propTypes = {
  onAddTag: PropTypes.func.isRequired,
  onRemoveTag: PropTypes.func.isRequired,
  onSetTag: PropTypes.func.isRequired,
  allTags: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  tags: PropTypes.arrayOf(React.PropTypes.string).isRequired
}
