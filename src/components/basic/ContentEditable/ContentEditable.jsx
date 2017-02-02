import React, { PropTypes } from 'react';

import { contentEditable } from './ContentEditable.styl';

const ContentEditable = ({
  text,
  maxLength,
  onBlur,
  className,
  onKeyDown,
  isDisabled }) => {
  const handlePaste = (e) => {
    e.preventDefault();
    const plainText = e.clipboardData.getData('text/plain');
    document.execCommand('inserttext', false, plainText);
  };

  const handleBlur = (e) => {
    onBlur(e.target.innerHTML);

    // e.target.innerHTML = '';
  };

  return (
    <div
      className={`${contentEditable} ${className}`}
      contentEditable={!isDisabled}
      onPaste={handlePaste}
      onKeyDown={e => onKeyDown(e)}
      onBlur={handleBlur}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default ContentEditable;

ContentEditable.defaultProps = {
  maxLength: 100,
  className: '',
  onKeyDown: val => val,
  isDisabled: false,
};

ContentEditable.propTypes = {
  text: PropTypes.string,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};
