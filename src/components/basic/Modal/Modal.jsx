import React, { PropTypes } from 'react';

import { wrapper, content } from './Modal.scss';

const Modal = ({ children, closeModal }) => {
  const stop = e => e.stopPropagation();

  return (
    <div className={wrapper} onClick={closeModal} >
      <div className={content} onClick={stop} >
        {children}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
