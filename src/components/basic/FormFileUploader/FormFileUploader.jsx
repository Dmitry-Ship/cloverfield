import React, { Component, PropTypes } from 'react';

import { defaultLabel, heading, image, button } from './FormFileUploader.styl';

export default class FormFileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: null,
      preview: null,
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    const theImage = e.target.files[0];
    const reader = new FileReader();

    const setSrc = (event) => {
      this.setState({
        preview: event.target.result,
        fileName: theImage.name,
      });
      this.props.onChange(theImage, event.target.result);
    };

    reader.onload = setSrc;

    reader.readAsDataURL(e.target.files[0]);
  }

  render() {
    const {
        name,
        id,
        required,
        fileType,
        className } = this.props;
    return (
      <div className={className}>
        <h2 className={heading} >
          Upload a photo of yourself to get started.
        </h2>
        <label className={defaultLabel} htmlFor={id} >
          <div
            className={image}
            style={{ backgroundImage: `url(${this.state.preview || this.props.preview})` }}
          />
          <div className={button}>Upload</div>
        </label>
        <input
          id={id}
          type="file"
          style={{ display: 'none' }}
          name={name}
          required={required}
          onChange={this.handleUpload}
          accept={fileType}
        />
      </div>
    );
  }
}

FormFileUploader.defaultProps = {
  className: '',
  fileType: 'image/*',
  id: 'fileUploader',
  name: 'image',
  required: false,
};


FormFileUploader.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  fileType: PropTypes.string,
};
