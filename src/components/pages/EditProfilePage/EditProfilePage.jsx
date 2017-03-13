import React, { Component } from 'react';
import { Link } from 'react-router';
import { page, card, link } from './EditProfilePage.scss';

import Heading from '../../basic/Heading';

import EditProfileFormContainer from '../../../containers/EditProfileFormContainer';
import ChangePasswordFormContainer from '../../../containers/ChangePasswordFormContainer';

export default class EditProfilePage extends Component {
  render() {
    return (
      <div className={page}>
        <div className={card} >
          <Heading>Edit your account</Heading>
          <EditProfileFormContainer />
        </div>
        <div className={card} >
          <Heading>Change password</Heading>
          <ChangePasswordFormContainer />
          <Link to="forgotpassword" className={link} ><h3>Forgot your password?</h3></Link>
        </div>
      </div>
    );
  }
}
