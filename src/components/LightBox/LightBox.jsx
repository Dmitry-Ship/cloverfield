import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { lightBox, middle, next, previous, wrapper } from './LightBox.scss';

export default class LightBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
    };
    this.showNext = this.showNext.bind(this);
    this.showPrevious = this.showPrevious.bind(this);
  }

  showNext() {
    if (this.state.index + 1 === this.props.images.length) {
      return this.setState({ index: 0 });
    }
    this.setState({ index: this.state.index + 1 });
  }

  showPrevious() {
    this.setState({ index: this.state.index - 1 });
  }

  render() {
    let wrapperRef;
    const { images } = this.props;
    const { index } = this.state;
    const isLast = images.length === index + 1;
    const isFirst = index === 0;

    const isDataURL = (s) => {
      const regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
      if (s.match(regex)) { return s; }
      return `${s}`;
    };

    const handleClick = (e) => {
      if (e.target === wrapperRef) {
        this.props.closeLightBox();
      }
    };

    return (
      <div className={lightBox} onClick={handleClick} ref={node => (wrapperRef = node)}>
        {!isFirst &&
          <img
            className={previous}
            src={isDataURL(images[index - 1].url)}
            alt=""
            onClick={this.showPrevious}
          />}
          <img
            className={middle}
            src={isDataURL(images[index].url)}
            alt=""
            onClick={this.showNext}
          />

        {!isLast &&
          <img
            className={next}
            src={isDataURL(images[index + 1].url)}
            alt=""
            onClick={this.showNext}
          />}
      </div>
    );
  }
}

LightBox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  closeLightBox: PropTypes.func.isRequired,
};
