import React, { Component } from 'react';

import { page, card, heading } from './SignUpPage.styl';

import Page from '../basic/Page';
import SignUpFormContainer from '../../containers/SignUpFormContainer';
import Card from '../basic/Card';


export default class SignUpPage extends Component {
  render() {
    return (
      <Page className={page}>

        <Card className={card} >
          <h1 className={heading} >Create new account</h1>
          <SignUpFormContainer />
        </Card>
      </Page>
    );
  }
}
