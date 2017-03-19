import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from '../components/Search';
import { search } from '../actions/noteActions';

const mapDispatchToProps = dispatch => ({
  onChange: data => dispatch(search(data)),
});

export default withRouter(connect(null, mapDispatchToProps)(Search));
