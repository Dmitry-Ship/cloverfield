import React from 'react';
import styles from './EditProfilePage.scss';
import Heading from 'components/basic/Heading';
import EditProfileFormContainer from 'containers/EditProfileFormContainer';
import ChangePasswordCardContainer from 'containers/ChangePasswordCardContainer';

const EditProfilePage = () => (
  <div className={styles.page}>
    <div className={styles.card} >
      <Heading>Edit your account</Heading>
      <EditProfileFormContainer />
    </div>
    <ChangePasswordCardContainer />
  </div>
);

export default EditProfilePage;

