import React from 'react';
import { Link } from 'react-router-dom';
import { page, card, link } from './EditProfilePage.scss';

import Heading from '../../basic/Heading';

import EditProfileFormContainer from '../../../containers/EditProfileFormContainer';
import ChangePasswordFormContainer from '../../../containers/ChangePasswordFormContainer';

const EditProfilePage = () => (
  <div className={page}>
    <div className={card} >
      <Heading>Edit your account</Heading>
      <EditProfileFormContainer />
    </div>
    <div className={card} >
      <Heading>Change password</Heading>
      <ChangePasswordFormContainer />
      <Link to="/forgotpassword" className={link} ><h3>Forgot your password?</h3></Link>
    </div>
  </div>
);

export default EditProfilePage;

