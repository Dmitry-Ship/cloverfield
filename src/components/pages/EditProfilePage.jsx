import React, { Component } from 'react';

import { page, card, heading } from './EditProfilePage.scss';

import Page from '../basic/Page';
import Card from '../basic/Card';

import EditProfileFormContainer from '../../containers/EditProfileFormContainer';

export default class EditProfilePage extends Component {
  render() {
    return (
      <Page className={page}>
        <Card className={card} >
          <h1 className={heading} >Edit your account</h1>
          <EditProfileFormContainer />
        </Card>
      </Page>
    );
  }
}
