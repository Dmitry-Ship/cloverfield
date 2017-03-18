import React from 'react';
import { Link } from 'react-router-dom';
import { card, link } from './LoginCard.scss';

import Heading from '../basic/Heading';

import LoginForm from '../../components/forms/LoginForm';

const LoginCard = ({ errors, validation, isLoggingIn, onSubmit, onSignUpClick, onForgotClick }) => (
  <div className={card} >
    <Heading>Welcome back</Heading>
    <LoginForm errors={errors} validation={validation} isLoggingIn={isLoggingIn} onSubmit={onSubmit} />
    <Link to="#" className={link} onClick={onForgotClick} >
      <h3>Forgot your password?</h3>
    </Link>
    <Link to="#" className={link} onClick={onSignUpClick} >
      <h3>New to Cloverfield? Sign Up here.</h3>
    </Link>
  </div>
);

export default LoginCard;
