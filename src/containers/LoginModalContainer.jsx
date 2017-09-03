import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login } from 'actions/authActions';
import LoginModal from 'components/LoginModal';
import validation from '../../helpers/validations/login';
import { getAuthErrorMessage, getIsLoggingIn } from 'selectors/authSelectors';
import { openModal, closeModal } from 'actions/UIActions';
import modalTypes from 'constants/modals';

const mapStateToProps = store => ({
  error: getAuthErrorMessage(store),
  isLoggingIn: getIsLoggingIn(store),
  validation,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return {
    ...stateProps,
    onSubmit: data => dispatch(login(data, () => history.push('/'))),
    onSignUpClick: () => dispatch(openModal(modalTypes.SIGNUP)),
    onForgotClick: () => dispatch(openModal(modalTypes.FORGOTPASSWORD)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, null, mergeProps)(LoginModal));
