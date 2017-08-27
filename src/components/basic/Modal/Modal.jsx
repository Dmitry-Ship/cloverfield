import PropTypes from 'prop-types';
import React from 'react';
import styles from './Modal.scss';
import Icon from '../Icon';

const Modal = ({ children, closeModal }) => {
  let wrapperRef;
  const handleClick = (e) => {
    if (e.target === wrapperRef) {
      closeModal();
    }
  };
  return (
    <div className={styles.wrapper} onClick={handleClick} ref={node => (wrapperRef = node)} >
      <div className={styles.content} >
        <Icon name="close" onClick={closeModal} className={styles.icon} />
        {children}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};
