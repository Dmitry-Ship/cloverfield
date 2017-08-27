import PropTypes from 'prop-types';
import React from 'react';
import Button from 'components/basic/Button';
import styles from './GetStarted.scss';

const GetStarted = ({ openSignUpModal, openLoginModal }) => (
  <div className={styles.wrapper} >
    <Button className={styles.buttonLeft} onClick={openSignUpModal} >Get started for free</Button>
    <Button
      className={styles.buttonRight}
      kind="secondary"
      onClick={openLoginModal}
    >
      I already have an account
    </Button>
  </div>
);


GetStarted.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
  openSignUpModal: PropTypes.func.isRequired,
};

export default GetStarted;
