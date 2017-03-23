import React, { PropTypes } from 'react';

import { wrapper, content, icon } from './Modal.scss';
import Icon from '../Icon';

const Modal = ({ children, closeModal }) => {
  let wrapperRef;
  const handleClick = (e) => {
    if (e.target === wrapperRef) {
      closeModal();
    }
  };
  return (
    <div className={wrapper} onClick={handleClick} ref={node => (wrapperRef = node)} >
      <div className={content} >
        <Icon name="close" onClick={closeModal} className={icon} />
        {children}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
