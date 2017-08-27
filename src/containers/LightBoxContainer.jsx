import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeLightBox } from 'actions/UIActions';
import LightBox from 'components/LightBox';
import { getImages, getImageIndex } from 'selectors/UISelectors';

const mapStateToProps = store => ({
  images: getImages(store),
  index: getImageIndex(store),
});

const mapDispatchToProps = dispatch => ({
  closeLightBox: () => dispatch(closeLightBox()),
});

class ProfileContainer extends Component {
  render() {
    if (this.props.images.length === 0) {
      return null;
    }
    return (
      <LightBox {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
