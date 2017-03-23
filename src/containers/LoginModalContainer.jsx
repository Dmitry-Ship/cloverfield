import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login } from '../actions/authActions';
import LoginModal from '../components/LoginModal';
import validation from '../../helpers/validations/login';
import { getErrorMessage, getIsLoggingIn } from '../reducers/authReducer';
import { openModal, closeModal } from '../actions/UIActions';

const mapStateToProps = store => ({
  errors: getErrorMessage(store),
  isLoggingIn: getIsLoggingIn(store),
  validation,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return Object.assign({}, stateProps,
    { onSubmit: data => dispatch(login(data, () => history.push('/'))),
      onSignUpClick: () => dispatch(openModal('signup')),
      onForgotClick: () => dispatch(openModal('forgotpassword')),
      closeModal: () => dispatch(closeModal()),
    });
};

export default withRouter(connect(mapStateToProps, null, mergeProps)(LoginModal));
