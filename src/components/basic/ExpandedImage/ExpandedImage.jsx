import React, { PropTypes } from 'react';

import { wrapper, image, closeIcon, next, previous, sliderIcon } from './ExpandedImage.scss';
import Icon from '../Icon';

const ExpandedImage = ({
  currentImage,
  showNextImage,
  showPreviousImage,
  hideImage,
  isFirst,
  isLast }) => {
  const stop = e => e.stopPropagation();

  const isDataURL = (s) => {
    const regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
    if (s.match(regex)) { return s; }
    return `/${s}`;
  };
  

  return (
    <div className={wrapper} onClick={hideImage} >
      <img className={image} src={isDataURL(currentImage)} alt="" onClick={stop} />
      <Icon name="exit_to_app" className={closeIcon} />

      {!isLast &&
        <div className={next} onClick={e => { stop(e); showNextImage(); }} >
          <Icon name="navigate_next" className={sliderIcon} />
        </div>}

      {!isFirst &&
        <div className={previous} onClick={e => { stop(e); showPreviousImage(); }} >
          <Icon name="navigate_before" className={sliderIcon} />
        </div>}
    </div>
  );
};

export default ExpandedImage;

ExpandedImage.propTypes = {
  hideImage: PropTypes.func.isRequired,
  currentImage: PropTypes.string.isRequired,
  showNextImage: PropTypes.func.isRequired,
  showPreviousImage: PropTypes.func.isRequired,
  isLast: PropTypes.bool.isRequired,
  isFirst: PropTypes.bool.isRequired,
};

