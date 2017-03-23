import React, { PropTypes } from 'react';

import { wrapper, content } from './Modal.scss';

const Modal = ({ children, closeModal }) => {
  let wrapperRef;
  const handleClick = (e) => {
    if (e.target === wrapperRef) {
      closeModal();
    }
  };
  return (
    <div className={wrapper} ref={node => (wrapperRef = node)} onClick={handleClick} >
      <div className={content} >
        {children}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
