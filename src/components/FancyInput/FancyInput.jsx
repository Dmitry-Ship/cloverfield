import React, { PropTypes } from 'react';

import { contentEditable } from './FancyInput.styl';

const FancyInput = ({ text, maxLength, onBlur, className }) => (
  <div
    className={`${contentEditable} ${className}`}
    contentEditable
    onBlur={e => onBlur(e.target.innerHTML)}
    dangerouslySetInnerHTML={{ __html: text }}
  />
);

export default FancyInput;

FancyInput.defaultProps = {
  maxLength: 100,
};

FancyInput.propTypes = {
  text: PropTypes.string,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string,
};
