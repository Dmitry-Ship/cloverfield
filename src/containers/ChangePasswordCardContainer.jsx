import { connect } from 'react-redux';
import { changePassword } from 'actions/userActions';
import ChangePasswordCard from 'components/ChangePasswordCard';
import validation from '../../helpers/validations/changePassword';
import { getIsPasswordChanged, getUserErrorMessage } from '../reducers';


import { openModal } from '../actions/UIActions';

const mapStateToProps = store => ({
  errors: getUserErrorMessage(store),
  validation,
  isChanged: getIsPasswordChanged(store),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(changePassword(data)),
  onForgotClick: () => dispatch(openModal('forgotpassword')),
});


export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordCard);

