import React, { PropTypes } from 'react';

import styles from './ChangablePic.css';

import Icon from '../basic/Icon';
import FileUploader from '../basic/FileUploader';

const ChangablePic = ({ onChangePic, src, className }) => {

  const changePic = (e) => onChangePic(e.target.files[0])

  const style={backgroundImage: `url(${src})`}

  return (
    <div className={styles.changablePic} style={style} >
      <label htmlFor={`NU`}>
        <Icon className={styles.icon} name='file_upload' size='54px'/>
      </label>
      <FileUploader
        id='NU'
        className={styles.uploader}
        fileType='image/*'
        onChange={changePic} />
    </div>
  )
}

export default ChangablePic;

ChangablePic.propTypes = {
  src: PropTypes.string.isRequired,
  onChangePic: PropTypes.func.isRequired
};
