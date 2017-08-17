import PropTypes from 'prop-types';
import React from 'react';
import Button from 'components/basic/Button';
import { buttonLeft, buttonRight, wrapper } from './GetStarted.scss';

const GetStarted = ({ openSignUpModal, openLoginModal }) => (
  <div className={wrapper} >
    <Button className={buttonLeft} onClick={openSignUpModal} >Get started for free</Button>
    <Button
      className={buttonRight}
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
