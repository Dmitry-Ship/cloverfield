import React from 'react';
import { card } from './LoginCard.scss';
import FancyLink from '../basic/FancyLink';
import Heading from '../basic/Heading';

import LoginForm from '../../components/forms/LoginForm';

const LoginCard = ({ onForgotClick, onSignUpClick, ...rest }) => (
  <div className={card} >
    <Heading>Welcome back</Heading>
    <LoginForm {...rest} />

    <FancyLink to="#" onClick={onForgotClick} >Forgot your password?</FancyLink>
    <FancyLink to="#" onClick={onSignUpClick} >New to Cloverfield? Sign Up here.</FancyLink>
  </div>
);

export default LoginCard;
