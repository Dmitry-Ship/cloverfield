import React, { Component } from 'react';

import { page, card } from './LoginPage.styl';

import Heading from '../basic/Heading';
import Page from '../basic/Page';
import Card from '../basic/Card';

import LoginFormContainer from '../../containers/LoginFormContainer';

export default class LoginPage extends Component {
  render() {
    return (
      <Page className={page}>
        <Heading size={1}>This is the Login Page</Heading>
        <Card className={card} >
          <LoginFormContainer />
        </Card>
      </Page>
    );
  }
}
