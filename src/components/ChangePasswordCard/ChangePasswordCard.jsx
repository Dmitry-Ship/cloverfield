import React from 'react';
import { Link } from 'react-router-dom';
import ChangePasswordFrom from '../forms/ChangePasswordForm';
import Heading from '../basic/Heading';

import { link, card } from './ChangePasswordCard.scss';

const ChangePasswordCard = ({ onForgotClick, ...rest }) => (
  <div className={card} >
    <Heading>Change password</Heading>
    <ChangePasswordFrom {...rest} />
    <Link to="#" onClick={onForgotClick} className={link} ><h3>Forgot your password?</h3></Link>
  </div>
);


export default ChangePasswordCard;
