import React, { Component } from 'react';
import { Link } from 'react-router';
import { page, card, link } from './LoginPage.scss';

import Page from '../basic/Page';
import Card from '../basic/Card';
import Heading from '../basic/Heading';

import LoginFormContainer from '../../containers/LoginFormContainer';

export default class LoginPage extends Component {
  render() {
    return (
      <Page className={page}>
        <Card className={card} >
          <Heading>Welcome back</Heading>
          <LoginFormContainer />
          <Link to="forgotpassword" className={link} ><h3>Forgot your password?</h3></Link>
        </Card>
      </Page>
    );
  }
}
