import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import styles from './FormFileUploader.scss';

const FormFileUploader = ({
      preview,
  onChange,
  onDeleteImage,
  className,
  text,
  ...rest }) => {
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
      <h2 className={styles.heading} >
        {text}
      </h2>
      <label className={styles.defaultLabel} >
        <div className={styles.image} style={{ backgroundImage: `url(${preview})`, position: 'relative' }}>
          {!!preview && <Icon name="close" className={styles.deleteIcon} onClick={handleClick} />}
        </div>

        <div className={styles.button}>Upload</div>
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
  className: '',
  text: '',
  accept: 'image/*',
  id: 'fileUploader',
  required: false,
};

FormFileUploader.propTypes = {
  preview: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDeleteImage: PropTypes.func.isRequired,
  accept: PropTypes.string,
};
