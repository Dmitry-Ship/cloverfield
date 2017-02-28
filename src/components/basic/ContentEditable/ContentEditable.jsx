import React, { PropTypes, Component } from 'react';

// export default class ContentEditable extends Component {
//   constructor() {
//     super();
//     this.keyPress = this.keyPress.bind(this);
//     this.emitChange = this.emitChange.bind(this);
//   }
//
//   shouldComponentUpdate(nextProps) {
//     return nextProps.html !== this.content.innerHTML;
//   }
//
//   componentDidUpdate() {
//     if (this.props.html !== this.content.innerHTML ) {
//       this.content.innerHTML = this.props.html;
//     }
//   }
//
//   keyPress(e){
//     const key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
//     if (key === 13) {
//       const html = this.content.innerHTML;
//       alert(html);
//     }
//   }
//
//   emitChange() {
//     const html = this.content.innerHTML;
//     if (this.props.onChange && html !== this.lastHtml) {
//       this.props.onChange({
//         target: {
//           value: html,
//         },
//       });
//     }
//     this.lastHtml = html;
//   }
//
//   render() {
//     return (
//       <div
//         onInput={this.emitChange}
//         onBlur={this.emitChange}
//         onKeyPress={this.keyPress}
//         className={this.props.className}
//         contentEditable
//         ref={c => this.content = c}
//         dangerouslySetInnerHTML={{ __html: this.props.html }}
//       />
//     );
//   }
// }

const ContentEditable = ({
  text,
  onBlur,
  className,
  onChange,
  onKeyDown,
  isDisabled }) => {
  const handlePaste = (e) => {
    e.preventDefault();
    const plainText = e.clipboardData.getData('text/plain');
    document.execCommand('inserttext', false, plainText);
  };

  const handleBlur = (e) => {
    onBlur(e);

    // e.target.innerHTML = '';
  };

  const handleChange = (e) => {
    onChange(e);
  }

  return (
    <div
      className={className}
      contentEditable={!isDisabled}
      onPaste={handlePaste}
      onInput={handleChange}
      onKeyDown={e => onKeyDown(e)}
      onBlur={handleBlur}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default ContentEditable;
//
ContentEditable.defaultProps = {
  maxLength: 100,
  className: '',
  onKeyDown: val => val,
  isDisabled: false,
};

ContentEditable.propTypes = {
  html: PropTypes.string,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  // onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};
