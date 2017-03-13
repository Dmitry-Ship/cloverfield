import React, { Component } from 'react';

import { page } from './ViewProfilePage.scss';

import ProfileCardContainer from '../../../containers/ProfileCardContainer';
import GeneralInfoCardContainer from '../../../containers/GeneralInfoCardContainer';

export default class ViewProfileContainer extends Component {
  render() {
    return (
      <div className={page} >
        <ProfileCardContainer />
        <GeneralInfoCardContainer />
      </div>
    );
  }
}
