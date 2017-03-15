import React from 'react';

import { page } from './ViewProfilePage.scss';

import ProfileCardContainer from '../../../containers/ProfileCardContainer';
import GeneralInfoCardContainer from '../../../containers/GeneralInfoCardContainer';

const ViewProfilePage = () => (
  <div className={page} >
    <ProfileCardContainer />
    <GeneralInfoCardContainer />
  </div>
);

export default ViewProfilePage;
