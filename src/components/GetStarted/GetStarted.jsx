import React, { PropTypes } from 'react';
import Button from '../basic/Button';

import { buttonLeft, buttonRight } from './GetStarted.scss';

const GetStarted = ({ openSignUpModal, openLoginModal }) => {
  const style = { position: 'relative' };
  return (
    <div style={style} >
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
