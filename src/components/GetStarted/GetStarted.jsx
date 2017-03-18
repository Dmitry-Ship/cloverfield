import React, { PropTypes } from 'react';
import Button from '../basic/Button';

import { button } from './GetStarted.scss';

const GetStarted = props => {
  const style = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };
  return (
    <div style={style} >
      <Button className={button} label="Get started for free" onClick={props.openSignUpModal} />
      <Button className={button} kind="secondary" label="I already have an account" onClick={props.openLoginModal} />
    </div>
  );
};

GetStarted.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
  openSignUpModal: PropTypes.func.isRequired,
};

export default GetStarted;
