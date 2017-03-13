import React, { Component } from 'react';

import { page, card } from './ForgotPasswordPage.scss';

import ForgotPasswordFormContainer from '../../../containers/ForgotPasswordFormContainer';

export default class ForgotPasswordPage extends Component {
  render() {
    return (
      <div className={page}>
        <div className={card} >
          <ForgotPasswordFormContainer />
        </div>
      </div>
    );
  }
}


