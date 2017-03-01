import React, { Component } from 'react';

import Page from '../basic/Page';

import ProfileCardContainer from '../../containers/ProfileCardContainer';
import GeneralInfoCardContainer from '../../containers/GeneralInfoCardContainer';

export default class ViewProfileContainer extends Component {
  render() {
    return (
      <Page >
        <ProfileCardContainer />
        <GeneralInfoCardContainer />
      </Page>
    );
  }
}
