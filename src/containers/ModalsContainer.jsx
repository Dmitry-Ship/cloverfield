import React from 'react';
import { connect } from 'react-redux';
import LoginModalContainer from './LoginModalContainer.jsx';
import SignUpModalContainer from './SignUpModalContainer.jsx';
import ForgotPasswordModalContainer from './ForgotPasswordModalContainer.jsx';
import ExpandedCreationFormContainer from './ExpandedCreationFormContainer.jsx';


import { getModal } from '../reducers';

const mapStateToProps = store => ({
  modal: getModal(store),
});

const ModalsContainer = props => {
  switch (props.modal) {
    case 'login':
      return <LoginModalContainer />;
    case 'signup':
      return <SignUpModalContainer />;
    case 'forgotpassword':
      return <ForgotPasswordModalContainer />;
    case 'creationform':
      return <ExpandedCreationFormContainer />;
    default:
      return null;
  }
};

export default connect(mapStateToProps)(ModalsContainer);
