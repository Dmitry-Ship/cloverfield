import React, { Component, PropTypes } from 'react';

export default class ContentEditable extends Component {
  constructor(){
    super();
  }

  render() {
    const {
      isDisabled,
      children,
      onChange,
      className } = this.props;
    return (
      <span
        className={className}
        contentEditable={!isDisabled}
        onBlur={this.handleBlur}
        onChange={onChange}>
        {children}
      </span>
    )
  }
}
ContentEditable.defaultProps = {
  isDisabled: false
}

ContentEditable.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isDisabled: PropTypes.bool,
}
