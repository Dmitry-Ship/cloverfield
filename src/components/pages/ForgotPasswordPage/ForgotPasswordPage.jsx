import React from 'react';

import { page, card } from './ForgotPasswordPage.scss';

import ForgotPasswordFormContainer from '../../../containers/ForgotPasswordFormContainer';

const ForgotPasswordPage = () => (
  <div className={page}>
    <div className={card} >
      <ForgotPasswordFormContainer />
    </div>
  </div>
);

export default ForgotPasswordPage;


