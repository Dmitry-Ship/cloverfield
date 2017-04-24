import React from 'react';
import { page, card } from './EditProfilePage.scss';
import Heading from '../../basic/Heading';
import EditProfileFormContainer from '../../../containers/EditProfileFormContainer';
import ChangePasswordCardContainer from '../../../containers/ChangePasswordCardContainer';

const EditProfilePage = () => (
  <div className={page}>
    <div className={card} >
      <Heading>Edit your account</Heading>
      <EditProfileFormContainer />
    </div>
    <ChangePasswordCardContainer />
  </div>
);

export default EditProfilePage;

