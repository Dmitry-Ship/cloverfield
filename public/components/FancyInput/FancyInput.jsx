import React, { Component, PropTypes } from 'react';

import { contentEditable } from './FancyInput.styl';

const FancyInput = ({ text, maxLength, onBlur, className }) => {

  const updateValue = e => onBlur(e.target.innerHTML);

  return (
    <div
      className={`${contentEditable} ${className}`}
      contentEditable
      onBlur={updateValue}
      dangerouslySetInnerHTML={{__html: text}}
    />
  )
}

export default FancyInput;

FancyInput.defaultProps = {
  maxLength: 100
}

FancyInput.propTypes = {
  text: PropTypes.string,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string,
}
