import React, { Component } from 'react';
import NotesList from '../components/NotesList';

export default class NotesListContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <NotesList allNotes={this.props.allNotes} />
    );
  }
}
