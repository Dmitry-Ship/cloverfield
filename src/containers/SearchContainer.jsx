import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from '../components/Search';

const mapStateToProps = (state, ownProps) => ({
  currentColor: ownProps.match.params.color,
  isInSearchMode: ownProps.history.location.pathname.includes('search'),
});

export default withRouter(connect(mapStateToProps)(Search));
