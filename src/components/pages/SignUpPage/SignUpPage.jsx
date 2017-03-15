import React from 'react';

import { page, card } from './SignUpPage.scss';

import SignUpFormContainer from '../../../containers/SignUpFormContainer';
import Heading from '../../basic/Heading';

const SignUpPage = () => (
  <div className={page}>
    <div className={card} >
      <Heading>Create new account</Heading>
      <SignUpFormContainer />
    </div>
  </div>
);

export default SignUpPage;
