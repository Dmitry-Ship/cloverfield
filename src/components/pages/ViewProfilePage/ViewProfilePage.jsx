import React from 'react';

import styles from './ViewProfilePage.scss';

import ProfileCardContainer from 'containers/ProfileCardContainer';
import GeneralInfoCardContainer from 'containers/GeneralInfoCardContainer';

const ViewProfilePage = () => (
  <div className={styles.page} >
    <ProfileCardContainer />
    <GeneralInfoCardContainer />
  </div>
);

export default ViewProfilePage;
