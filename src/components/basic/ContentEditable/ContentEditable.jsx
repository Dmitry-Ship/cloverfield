import React, { PropTypes, Component } from 'react';

import { contentEditable } from './ContentEditable.styl';


// export default class ContentEditable extends Component {
//   constructor() {
//     super();
//     // this.state = {
//     //
//     // }
//
//     this.handlePaste = this.handlePaste.bind(this);
//     this.handleBlur = this.handleBlur.bind(this);
//   }
//
//   handlePaste(e) {
//     e.preventDefault();
//     const plainText = e.clipboardData.getData('text/plain');
//     document.execCommand('inserttext', false, plainText);
//   }
//
//   handleBlur(e) {
//     this.props.onBlur(e.target.innerHTML);
//
//     e.target.innerHTML = '';
//   }
//
//
//   render() {
//     const {
//       text,
//       maxLength,
//       onBlur,
//       className,
//       onKeyDown,
//       isDisabled } = this.props;
//     return (
//       <div
//         className={`${contentEditable} ${className}`}
//         contentEditable={!isDisabled}
//         onPaste={this.handlePaste}
//         onKeyDown={e => this.props.onKeyDown(e)}
//         onBlur={this.handleBlur}
//         dangerouslySetInnerHTML={{ __html: text }}
//       />
//     )
//   }
// }

const ContentEditable = ({
  text,
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
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};
