import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { signUp } from '../actions/authActions';
import SignUpForm from '../components/forms/SignUpForm';
import validation from '../../helpers/validations/signup';
import { getErrorMessage, getIsLoggedIn } from '../reducers/authReducer';

const mapStateToProps = store => ({
  errors: getErrorMessage(store),
  isLoggingIn: getIsLoggedIn(store),
  validation,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return Object.assign({}, stateProps,
    { onSubmit: data => dispatch(signUp(data, () => history.push('/'))) });
};

export default withRouter(connect(mapStateToProps, null, mergeProps)(SignUpForm));

