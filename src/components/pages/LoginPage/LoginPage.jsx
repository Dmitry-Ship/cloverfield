import React from 'react';
import { Link } from 'react-router-dom';
import { page, card, link } from './LoginPage.scss';

import Heading from '../../basic/Heading';

import LoginFormContainer from '../../../containers/LoginFormContainer';

const LoginPage = () => (
  <div className={page}>
    <div className={card} >
      <Heading>Welcome back</Heading>
      <LoginFormContainer />
      <Link to="forgotpassword" className={link} ><h3>Forgot your password?</h3></Link>
    </div>
  </div>
);

export default LoginPage;
