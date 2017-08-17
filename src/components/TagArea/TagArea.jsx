import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  tagArea,
  input,
  input__field,
  suggestionsMenu,
  suggestion
} from './TagArea.scss';

import PopUpMenu from 'components/basic/PopUpMenu';
import Tag from 'components/basic/Tag';

export default class TagArea extends Component {
  constructor() {
    super();
    this.emitChange = this.emitChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.setTag = this.setTag.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
  }

  setTag(e) {
    const value = e.target.innerHTML;

    this.props.onAddTag(value);
  }

  handlePaste(e) {
    e.preventDefault();
    const plainText = e.clipboardData.getData('text/plain');
    document.execCommand('inserttext', false, plainText);
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

  handleBlur(e) {
    if (e.target.innerHTML === '' || e.target.innerHTML === ' ') return;

    this.props.onAddTag(e.target.innerHTML);

    e.target.innerHTML = '';
  }

  render() {
    const { tags, suggestions, onDeleteTag, className } = this.props;

    return (
      <div className={`${tagArea} ${className}`}>
        {tags.map(tag => <Tag tagText={tag} key={tag} onDeleteTag={onDeleteTag} />)}

        <div className={input}>
          <div
            contentEditable
            className={input__field}
            onKeyDown={this.emitChange}
            onBlur={this.handleBlur}
            onPaste={this.handlePaste}
          />

          {suggestions.length > 0 &&
            <PopUpMenu className={suggestionsMenu} position="top" >
              {suggestions.map(tag =>
                <span onMouseDown={this.setTag} key={tag} className={suggestion} >{tag}</span>)}
            </PopUpMenu>}
        </div>
      </div>
    );
  }
}

TagArea.defaultProps = {
  className: '',
};

TagArea.propTypes = {
  onAddTag: PropTypes.func.isRequired,
  onDeleteTag: PropTypes.func.isRequired,
  className: PropTypes.string,
  suggestions: PropTypes.arrayOf(React.PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
