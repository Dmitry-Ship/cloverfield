import React, { PropTypes } from 'react';

import { fileUploader } from './FileUploader.css';

const FileUploader = ({
                        name,
                        id,
                        placeholder,
                        required,
                        onChange,
                        label,
                        fileType,
                        className }) => (
  <input
    id={id}
    type='file'
    className={`${fileUploader} ${className}`}
    name={name}
    placeholder={placeholder}
    required={required}
    onChange={onChange}
    accept={fileType}/>
)

export default FileUploader;

// FileUploader.defaultProps = {
//   inputRenderer: (value) => { return value ? value.name :  }
// }

FileUploader.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  //inputRenderer: PropTypes.func,
}
