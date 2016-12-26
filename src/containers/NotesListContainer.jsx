import { connect } from 'react-redux';

import NotesList from '../components/NotesList';

import { fetchNotes } from '../actions/noteActions';

const mapStateToProps = store => ({
  allNotes: store.noteReducer,
  loading: store.noteReducer.fetching,
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
