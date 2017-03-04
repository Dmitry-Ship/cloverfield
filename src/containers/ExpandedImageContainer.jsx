import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpandedImage from '../components/basic/ExpandedImage';
import { getImage } from '../reducers/UIReducer';
import { hideImage } from '../actions/UIActions';

const mapStateToProps = store => ({
  image: getImage(store),
});

const mapDispatchToProps = dispatch => ({
  hideImage: () => dispatch(hideImage()),
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
