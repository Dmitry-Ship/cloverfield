import React, { PropTypes } from 'react';
import Button from '../basic/Button';

import { buttonLeft, buttonRight } from './GetStarted.scss';

const GetStarted = props => {
  const style = {
    // display: 'flex',
    // flexWrap: 'nowrap',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%',
    position: 'relative',
  };
  return (
    <div style={style} >
      <Button className={buttonLeft} onClick={props.openSignUpModal} >Get started for free</Button>
      <Button className={buttonRight} kind="secondary" onClick={props.openLoginModal} >I already have an account</Button>
    </div>
  );
};

GetStarted.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
  openSignUpModal: PropTypes.func.isRequired,
};

export default GetStarted;
