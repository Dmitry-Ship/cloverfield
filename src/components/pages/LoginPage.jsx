import React, { Component } from 'react';

import { page, card } from './LoginPage.styl';

import Page from '../basic/Page';
import Card from '../basic/Card';

import LoginFormContainer from '../../containers/LoginFormContainer';

export default class LoginPage extends Component {
  render() {
    return (
      <Page className={page}>
        <h1>This is the Login Page</h1>
        <Card className={card} >
          <LoginFormContainer />
        </Card>
      </Page>
    );
  }
}
