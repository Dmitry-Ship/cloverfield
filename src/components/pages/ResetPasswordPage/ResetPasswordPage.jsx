import React from 'react';

import { page, card } from './ResetPasswordPage.scss';

import ResetPasswordFormContainer from 'containers/ResetPasswordFormContainer';

const ResetPasswordPage = () => (
  <div className={page}>
    <div className={card} >
      <ResetPasswordFormContainer token={this.props.params.token} />
    </div>
  </div>
);

export default ResetPasswordPage;

