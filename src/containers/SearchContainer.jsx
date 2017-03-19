import { connect } from 'react-redux';
import Search from '../components/Search';
import { search } from '../actions/noteActions';

const mapDispatchToProps = dispatch => ({
  onChange: data => dispatch(search(data)),
});

export default connect(null, mapDispatchToProps)(Search);
