import React from 'react';
import { card } from './SignUpCard.scss';
import FancyLink from '../basic/FancyLink';
import Heading from '../basic/Heading';

import SignUpForm from '../../components/forms/SignUpForm';

const SignUpCard = ({ onLoginClick, ...rest }) => (
  <div className={card} >
    <Heading>Create new account</Heading>
    <SignUpForm {...rest} />
    <FancyLink to="#" onClick={onLoginClick} >Already have an account?</FancyLink>
  </div>
);

export default SignUpCard;
