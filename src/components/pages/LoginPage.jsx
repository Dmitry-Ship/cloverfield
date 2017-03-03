import React, { Component } from 'react';

import { page, card, heading } from './LoginPage.scss';

import Page from '../basic/Page';
import Card from '../basic/Card';

import LoginFormContainer from '../../containers/LoginFormContainer';

export default class LoginPage extends Component {
  render() {
    return (
      <Page className={page}>
        <Card className={card} >
          <h1 className={heading} >Welcome back</h1>
          <LoginFormContainer />
        </Card>
      </Page>
    );
  }
}
