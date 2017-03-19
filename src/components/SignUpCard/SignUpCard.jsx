import React from 'react';
import { Link } from 'react-router-dom';
import { card, link } from './SignUpCard.scss';

import Heading from '../basic/Heading';

import SignUpForm from '../../components/forms/SignUpForm';

const SignUpCard = ({ onLoginClick, ...rest }) => (
  <div className={card} >
    <Heading>Create new account</Heading>
    <SignUpForm {...rest} />
    <Link to="#" className={link} onClick={onLoginClick} ><h3>Already have an account?</h3></Link>
  </div>
);

export default SignUpCard;
