import React from 'react';
import { Link } from 'react-router-dom';
import { card, link } from './LoginCard.scss';

import Heading from '../basic/Heading';

import LoginForm from '../../components/forms/LoginForm';

const LoginCard = ({ errors, validation, isLoggingIn, onSubmit }) => (
  <div className={card} >
    <Heading>Welcome back</Heading>
    <LoginForm erros={errors} validation={validation} isLoggingIn={isLoggingIn} onSubmit={onSubmit} />
    <Link to="forgotpassword" className={link} ><h3>Forgot your password?</h3></Link>
  </div>
);

export default LoginCard;
