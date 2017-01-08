import React from 'react';

import { page, card } from './SignUpPage.styl';

import Heading from '../components/basic/Heading';
import Page from '../components/basic/Page';
import SignUpFormContainer from '../containers/SignUpFormContainer';
import Card from '../components/basic/Card';

const SignUpPage = () => (
  <Page className={page}>
    <Heading size={1}>This is the Sign In Page</Heading>
    <Card className={card}>
      <SignUpFormContainer />
    </Card>
  </Page>
);

export default SignUpPage;
