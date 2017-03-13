import React, { Component } from 'react';

import { page, card } from './ForgotPasswordPage.scss';

import Page from '../basic/Page';
import Card from '../basic/Card';

import ForgotPasswordFormContainer from '../../containers/ForgotPasswordFormContainer';

export default class ForgotPasswordPage extends Component {
  render() {
    return (
      <Page className={page}>
        <Card className={card} >
          <ForgotPasswordFormContainer />
        </Card>
      </Page>
    );
  }
}


