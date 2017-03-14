import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpandedImage from '../components/basic/ExpandedImage';
import { getImage, getIsLast, getIsFirst } from '../reducers/UIReducer';
import { hideImage, nextImage, previousImage } from '../actions/UIActions';

const mapStateToProps = store => ({
  image: getImage(store),
  isLast: getIsLast(store),
  isFirst: getIsFirst(store),
});

const mapDispatchToProps = dispatch => ({
  hideImage: () => dispatch(hideImage()),
  nextImage: () => dispatch(nextImage()),
  previousImage: () => dispatch(previousImage()),
});

class ExpandedImageContainer extends Component {
  render() {
    if (!this.props.image) {
      return null;
    }
    return (
      <ExpandedImage {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedImageContainer);
