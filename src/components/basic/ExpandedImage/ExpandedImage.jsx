import React, { Component, PropTypes } from 'react';

import { wrapper, zoomed, closeIcon, fileName, next, previous, sliderIcon } from './ExpandedImage.scss';
import Icon from '../Icon';

export default class ExpandedImage extends Component {
  constructor() {
    super();
    this.handleClickOnBackground = this.handleClickOnBackground.bind(this);
    this.handleClickOnNext = this.handleClickOnNext.bind(this);
    this.handleClickOnPrevious = this.handleClickOnPrevious.bind(this);
    this.handleClickOnImage = this.handleClickOnImage.bind(this); 
  }

  handleClickOnBackground() {
    this.props.hideImage();
  }

  handleClickOnNext(e) {
    e.stopPropagation();
    this.props.nextImage();
  }

  handleClickOnPrevious(e) {
    e.stopPropagation();
    this.props.previousImage();
  }

  handleClickOnImage(e) {
    e.stopPropagation();
  }

  render() {
    const { image } = this.props;
    return (
      <div className={wrapper} onClick={this.handleClickOnBackground} >
        {/*{this.props.isLast && <p className={fileName} >loll{this.props.isLast}</p>}*/}
        <img className={zoomed} src={image} alt="" onClick={this.handleClickOnImage} />
        <Icon name="exit_to_app" className={closeIcon} />

        {!this.props.isLast &&
          <div className={next} onClick={this.handleClickOnNext} >
            <Icon name="navigate_next" className={sliderIcon} />
          </div>}

        {!this.props.isFirst &&
          <div className={previous} onClick={this.handleClickOnPrevious} >
            <Icon name="navigate_before" className={sliderIcon} />
          </div>}


      </div>
    );
  }
}

ExpandedImage.propTypes = {
  hideImage: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
};

