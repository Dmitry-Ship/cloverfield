import React from 'react';
import { connect } from 'react-redux';
import LoginModalContainer from './LoginModalContainer.jsx';
import SignUpModalContainer from './SignUpModalContainer.jsx';
import ForgotPasswordModalContainer from './ForgotPasswordModalContainer.jsx';
import { getModal } from 'selectors/UISelectors';
import modalTypes from 'constants/modals';

const mapStateToProps = store => ({
  modal: getModal(store),
});

const ModalsContainer = ({ modal }) => {
  switch (modal) {
    case modalTypes.LOGIN:
      return <LoginModalContainer />;
    case modalTypes.SIGNUP:
      return <SignUpModalContainer />;
    case modalTypes.FORGOTPASSWORD:
      return <ForgotPasswordModalContainer />;
    default:
      return null;
  }
};

export default connect(mapStateToProps)(ModalsContainer);
