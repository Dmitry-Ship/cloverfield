import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login } from '../actions/authActions';
import LoginCard from '../components/LoginCard';
import validation from '../../helpers/validations/login';
import { getErrorMessage, getIsLoggingIn } from '../reducers/authReducer';

const mapStateToProps = store => ({
  errors: getErrorMessage(store),
  isLoggingIn: getIsLoggingIn(store),
  validation,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return Object.assign({}, stateProps,
    { onSubmit: data => dispatch(login(data, () => history.push('/'))) });
};

export default withRouter(connect(mapStateToProps, null, mergeProps)(LoginCard));
