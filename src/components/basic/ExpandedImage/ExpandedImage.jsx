import React, { Component, PropTypes } from 'react';

import { wrapper, zoomed } from './ExpandedImage.scss';

export default class ExpandedImage extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.hideImage();
    }
  }
  render() {
    const { image } = this.props;
    return (
      <div className={wrapper} >
        <img className={zoomed} src={image} alt="" ref={node => (this.wrapperRef = node)} />
      </div>
    );
  }
}

ExpandedImage.propTypes = {
  hideImage: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

