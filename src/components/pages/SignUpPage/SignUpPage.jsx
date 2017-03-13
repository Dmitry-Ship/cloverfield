import React, { Component } from 'react';

import { page, card } from './SignUpPage.scss';

import SignUpFormContainer from '../../../containers/SignUpFormContainer';
import Heading from '../../basic/Heading';

export default class SignUpPage extends Component {
  render() {
    return (
      <div className={page}>
        <div className={card} >
          <Heading>Create new account</Heading>
          <SignUpFormContainer />
        </div>
      </div>
    );
  }
}
