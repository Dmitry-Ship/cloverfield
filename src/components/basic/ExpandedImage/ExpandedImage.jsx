import React, { PropTypes, Component } from 'react';

import { wrapper, image, next, previous } from './ExpandedImage.scss';

export default class ExpandedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
    };
    this.showNext = this.showNext.bind(this);
    this.showPrevious = this.showPrevious.bind(this);
  }

  showNext() {
    this.setState({ index: this.state.index + 1 });
  }

  showPrevious() {
    this.setState({ index: this.state.index - 1 });
  }

  render() {
    const { images } = this.props;
    const { index } = this.state;
    const stop = e => e.stopPropagation();
    const isLast = images.length === index + 1;
    const isFirst = index === 0;

    const isDataURL = (s) => {
      const regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
      if (s.match(regex)) { return s; }
      return `/${s}`;
    };

    return (
      <div className={wrapper} >
        <img
          className={image}
          src={isDataURL(images[index])}
          alt=""
          onClick={(e) => { stop(e); this.showNext(); }}
        />

        {!isLast &&
          <img
            className={next}
            src={isDataURL(images[index + 1])}
            alt=""
            onClick={(e) => { stop(e); this.showNext(); }}
          />}

        {!isFirst &&
          <img
            className={previous}
            src={isDataURL(images[index - 1])}
            alt=""
            onClick={(e) => { stop(e); this.showPrevious(); }}
          />}

      </div>
    );
  }
}

ExpandedImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

