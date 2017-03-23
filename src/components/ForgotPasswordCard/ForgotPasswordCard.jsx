import React from 'react';
import { card } from './ForgotPasswordCard.scss';
import Heading from '../basic/Heading';

import ForgotPasswordForm from '../../components/forms/ForgotPasswordForm';

const ForgotPasswordCard = ({ isTokenSent, onLoginClick, errors, ...rest }) => (
  <div className={card} >
  {errors.general &&
      <div>
        <Heading style={{ color: 'tomato' }}>Oops, something went wrong</Heading>
        <h2 style={{ textAlign: 'center' }} >{errors.general}</h2>
      </div>}
  {isTokenSent ? <Heading>Alrighty, instructions have been sent, check your inbox!</Heading> :
      <div>
        <Heading>We will send you an email with instructions on how to reset password</Heading>
        <ForgotPasswordForm errors={errors} {...rest} />
      </div>}
  </div>
);

export default ForgotPasswordCard;