import React, { PropTypes } from 'react';

import { changablePic, icon, uploader } from './ChangablePic.styl';

import Icon from '../basic/Icon';
import FileUploader from '../basic/FileUploader';

const ChangablePic = ({ onChangePic, src, className }) => {

  const changePic = (e) => onChangePic(e.target.files[0])

  const style={backgroundImage: `url(${src})`}

  return (
    <div className={changablePic} style={style} >
      <label htmlFor={`NU`}>
        <Icon className={icon} name='file_upload' size='54px'/>
      </label>
      <FileUploader
        id='NU'
        className={uploader}
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
