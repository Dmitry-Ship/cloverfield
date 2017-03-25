import React, { PropTypes } from 'react';

import Icon from '../Icon';

import { defaultLabel, heading, image, button, deleteIcon } from './FormFileUploader.scss';

const FormFileUploader = ({
      preview,
      onChange,
      onDeleteImage,
      className,
      text,
      ...rest,
    }) => {
  const handleUpload = (e) => {
    const theImage = e.target.files[0];
    const reader = new FileReader();

    const setSrc = (event) => {
      onChange(theImage, event.target.result);
    };

    reader.onload = setSrc;

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    onDeleteImage();
  };

  return (
    <div className={className} >
      <h2 className={heading} >
        {text}
      </h2>
      <label className={defaultLabel} >
        <div className={image} style={{ backgroundImage: `url(${preview})`, position: 'relative' }}>
          {!!preview && <Icon name="close" className={deleteIcon} onClick={handleClick} />}
        </div>

        <div className={button}>Upload</div>
        <input
          {...rest}
          style={{ display: 'none' }}
          type="file"
          onChange={handleUpload}
        />
      </label>

    </div>
  );
};

export default FormFileUploader;

FormFileUploader.defaultProps = {
  className: null,
  text: '',
  accept: 'image/*',
  id: 'fileUploader',
  name: 'image',
  required: false,
};

FormFileUploader.propTypes = {
  preview: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDeleteImage: PropTypes.func.isRequired,
  required: PropTypes.bool,
  accept: PropTypes.string,
};
