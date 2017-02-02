import React, { Component, PropTypes } from 'react';

import {
  tagArea,
  input,
  input__field,
  input__suggestions } from './TagArea.styl';

import ContentEditable from '../basic/ContentEditable';
import PopUpMenu from '../basic/PopUpMenu';
import Tag from '../basic/Tag';

export default class TagArea extends Component {
  constructor() {
    super();
    this.emitChange = this.emitChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.setTag = this.setTag.bind(this);
  }

  setTag(e) {
    const value = e.target.innerHTML;

    this.props.onSetTag(value);
  }

  emitChange(e) {
    const curKey = e.which;
    const value = e.target.innerHTML;

    if (value === '' && curKey === 8) {
      const removed = this.props.tags.slice(-1)[0];

      this.props.onDeleteTag(removed);
    }
    if (curKey === 32 || curKey === 13) {
      e.preventDefault();
      if (value === '' || value === ' ') return;

      const content = e.target.innerHTML.trim();

      this.props.onAddTag(content);

      e.target.innerHTML = '';
    }
  }

  handleBlur(value) {
    if (value === '' || value === ' ') return;

    this.props.onAddTag(value);
  }

  render() {
    const { tags, allTags, onDeleteTag, className } = this.props;
    // const suggTags = allTags.map(tag => tag.name);
    // const list = []
    // for (let i = 0; i < suggTags.length; i++) {
    //   list.push({text: suggTags[i], func: this.setTag })
    // }
    return (
      <div className={`${tagArea} ${className}`}>
        {tags.map((tag, i) => <Tag tagText={tag} key={i} onDeleteTag={onDeleteTag} />)}

        <div className={input}>
          <ContentEditable
            onKeyDown={this.emitChange}
            onBlur={e => this.handleBlur(e)}
            className={input__field}
          />

          <PopUpMenu
            className={input__suggestions}
            // items={list}
          />
        </div>
      </div>
    );
  }
}

TagArea.propTypes = {
  onAddTag: PropTypes.func.isRequired,
  onDeleteTag: PropTypes.func.isRequired,
  className: PropTypes.string,
  // onSetTag: PropTypes.func.isRequired,
  // allTags: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  tags: PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
