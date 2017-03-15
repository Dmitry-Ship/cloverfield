import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpandedImage from '../components/basic/ExpandedImage';
import { getCurrentImage, getIsLast, getIsFirst } from '../reducers/UIReducer';
import { hideImage, showNextImage, showPreviousImage } from '../actions/UIActions';

const mapStateToProps = store => ({
  currentImage: getCurrentImage(store),
  isLast: getIsLast(store),
  isFirst: getIsFirst(store),
});

const mapDispatchToProps = dispatch => ({
  hideImage: () => dispatch(hideImage()),
  showNextImage: () => dispatch(showNextImage()),
  showPreviousImage: () => dispatch(showPreviousImage()),
});

class ExpandedImageContainer extends Component {
  render() {
    if (!this.props.currentImage) {
      return null;
    }
    return (
      <ExpandedImage {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedImageContainer);
