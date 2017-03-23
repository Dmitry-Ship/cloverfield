import React, { PropTypes } from 'react';
import Button from '../basic/Button';

import { buttonLeft, buttonRight, wrapper } from './GetStarted.scss';

const GetStarted = ({ openSignUpModal, openLoginModal }) => {

  return (
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
};

GetStarted.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
  openSignUpModal: PropTypes.func.isRequired,
};

export default GetStarted;