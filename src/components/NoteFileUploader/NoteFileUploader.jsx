import React, { Component, PropTypes } from 'react';

import Icon from '../basic/Icon';

import { icon, label } from './NoteFileUploader.styl';

export default class NoteFileUploader extends Component {
  constructor() {
    super();
    this.state = {
      fileName: null,
      preview: null,
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.deletePreview = this.deletePreview.bind(this);
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

  deletePreview() {
    this.setState({
      preview: null,
      fileName: null,
    });
  }

  render() {
    const {
        name,
        id,
        required,
        fileType,
        className } = this.props;
    return (
      <div>
        <label className={`${className} ${label}`} htmlFor={id} >
          <Icon className={icon} name="image" />
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

NoteFileUploader.defaultProps = {
  className: '',
  fileType: 'image/*',
  name: 'image',
  required: false,
  customLabel: null,
};


NoteFileUploader.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  fileType: PropTypes.string,
};
