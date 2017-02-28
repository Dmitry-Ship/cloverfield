import { connect } from 'react-redux';
import React, { Component } from 'react';
import NotesList from '../components/NotesList';
import Loader from '../components/basic/Loader';
import { fetchNotes } from '../actions/noteActions';
import { getVisibleNotes, getIsFetching } from '../reducers/noteReducer';

const mapStateToProps = (store, ownProps) => ({
  notes: getVisibleNotes(store, ownProps.params.tagText),
  isFetching: getIsFetching(store),
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch((fetchNotes)()),
});

class NotesListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    if (this.props.isFetching) {
      return (<Loader type="triple-dots" />);
    }
    if (this.props.notes.length === 0) {
      const style = {
        textAlign: 'center',
        opacity: '0.3',
        marginTop: '120px'
      }
      return (<h1 style={style} >You don`t have any notes</h1>);
    }

    return (
      <NotesList notes={this.props.notes} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesListContainer);
