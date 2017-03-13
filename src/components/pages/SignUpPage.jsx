import React, { Component } from 'react';

import { page, card } from './SignUpPage.scss';

import Page from '../basic/Page';
import SignUpFormContainer from '../../containers/SignUpFormContainer';
import Card from '../basic/Card';
import Heading from '../basic/Heading';

export default class SignUpPage extends Component {
  render() {
    return (
      <Page className={page}>
        <Card className={card} >
          <Heading>Create new account</Heading>
          <SignUpFormContainer />
        </Card>
      </Page>
    );
  }
}
