import React, { Component } from 'react';

import { page, card } from './SignUpPage.styl';

import Page from '../basic/Page';
import SignUpFormContainer from '../../containers/SignUpFormContainer';
import Card from '../basic/Card';


export default class SignUpPage extends Component {
  render() {
    return (
      <Page className={page}>
        <h1>This is the SignUp Page</h1>
        <Card className={card} >
          <SignUpFormContainer />
        </Card>
      </Page>
    );
  }
}

// const SignUpPage = () => (
//   <Page className={page}>
//     <Heading size={1}>This is the Sign In Page</Heading>
//     <Card className={card}>
//       <SignUpFormContainer />
//     </Card>
//   </Page>
// );
//
// export default SignUpPage;
