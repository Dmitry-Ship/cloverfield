import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'components/basic/Icon';
import { icon, label } from './NoteFileUploader.scss';

const NoteFileUploader = ({
        name,
  id,
  required,
  onChange,
  fileType,
  className }) => {
  const handleUpload = (e) => {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      const setSrc = (event, file) => {
        onChange({
          preview: event.target.result,
          file,
        });
      };

      reader.onload = ev => setSrc(ev, files[i]);

      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <div>
      <label className={`${className} ${label}`} htmlFor={id} >
        <Icon className={icon} name="image" />
      </label>
      <input
        id={id}
        type="file"
        style={{ display: 'none' }}
        multiple
        name={name}
        required={required}
        onChange={handleUpload}
        accept={fileType}
      />
    </div>
  );
};

export default NoteFileUploader;

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
