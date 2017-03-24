import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login } from '../actions/authActions';
import SignUpModal from '../components/SignUpModal';
import validation from '../../helpers/validations/signup';
import { getAuthErrorMessage, getIsLoggingIn } from '../reducers';
import { openModal, closeModal } from '../actions/UIActions';

const mapStateToProps = store => ({
  errors: getAuthErrorMessage(store),
  isLoggingIn: getIsLoggingIn(store),
  validation,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return Object.assign({}, stateProps,
    { onSubmit: data => dispatch(login(data, () => history.push('/'))),
      onLoginClick: () => dispatch(openModal('login')),
      closeModal: () => dispatch(closeModal()),
    });
};

export default withRouter(connect(mapStateToProps, null, mergeProps)(SignUpModal));
