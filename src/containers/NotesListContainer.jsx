import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
import NotesList from 'components/NotesList';
import Loader from 'components/basic/Loader';
import { fetchNotes } from 'actions/noteActions';
import { getVisibleNotes } from 'reducers/noteReducer';
import { getIsFetching, getErrorMessage } from 'reducers';


const mapStateToProps = (store, { match }) => ({
  notes: getVisibleNotes(store, match.params.tagText, match.params.color, match.params.images, match.params.query),
  isFetching: getIsFetching(store),
  errorMessage: getErrorMessage(store),
});


const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch((fetchNotes)()),
});

class NotesListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { notes, isFetching, errorMessage } = this.props;
    if (isFetching && notes.length === 0) {
      return (<Loader type="triple-dots" />);
    }

    if (errorMessage) {
      const style = {
        textAlign: 'center',
        opacity: '0.3',
        color: 'red',
        marginTop: '120px',
      };
      return (<h1 style={style} >Unable to load notes. {errorMessage}</h1>);
    }

    if (notes.length === 0) {
      const style = {
        textAlign: 'center',
        opacity: '0.3',
        marginTop: '120px',
      };
      return (<h2 style={style} >You don`t have any notes</h2>);
    }

    return (
      <NotesList notes={notes} />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesListContainer));

