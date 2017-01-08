import React from 'react';

import { page, card } from './LoginPage.styl';

import Heading from '../components/basic/Heading';
import Page from '../components/basic/Page';
import Card from '../components/basic/Card';

import LoginFormContainer from '../containers/LoginFormContainer';


const LoginPage = () => (
  <Page className={page}>
    <Heading size={1}>This is the Login Page</Heading>
    <Card className={card} >
      <LoginFormContainer />
    </Card>
  </Page>
);

export default LoginPage;
