import React, { PropTypes } from 'react';

import { fileUploader, labelView } from './FileUploader.styl';

const FileUploader = ({
    name,
    id,
    required,
    onChange,
    label,
    fileType,
    className }) => (

      <label className={`${labelView} ${className}`} htmlFor={id}>
        {label}
        <input
          id={id}
          type="file"
          className={fileUploader}
          name={name}
          required={required}
          onChange={onChange}
          accept={fileType}
        />
      </label>
);

export default FileUploader;

// FileUploader.defaultProps = {
//   inputRenderer: (value) => { return value ? value.name :  }
// }
FileUploader.defaultProps = {
  className: '',
  fileType: 'image/*',
  name: 'image',
  label: '',
  required: false,
};


FileUploader.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  inputRenderer: PropTypes.func,
  fileType: PropTypes.string,
};
