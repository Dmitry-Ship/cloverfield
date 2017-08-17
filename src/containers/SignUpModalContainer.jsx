import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { signUp } from 'actions/authActions';
import SignUpModal from 'components/SignUpModal';
import validation from '../../helpers/validations/signup';
import { getAuthErrorMessage, getIsLoggingIn } from 'reducers';
import { openModal, closeModal } from 'actions/UIActions';
import modalTypes from 'constants/modals';

const mapStateToProps = store => ({
  errors: getAuthErrorMessage(store),
  isLoggingIn: getIsLoggingIn(store),
  validation,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return Object.assign({}, stateProps,
    {
      onSubmit: data => dispatch(signUp(data, () => history.push('/'))),
      onLoginClick: () => dispatch(openModal(modalTypes.LOGIN)),
      closeModal: () => dispatch(closeModal()),
    });
};


export default withRouter(connect(mapStateToProps, null, mergeProps)(SignUpModal));
