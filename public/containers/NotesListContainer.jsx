import React, { Component } from 'react';

import NotesList from '../components/NotesList';

export default class NotesListContainer extends Component {
  constructor() {
    super()
    this.state = {
      allNotes: [
        {
          _id: '123',
          title: 'one',
          content: 'two',
          tags: [],
          color: 'white'
        }
      ]
    }
  }

  render() {
    return (
      <NotesList allNotes={this.props.allNotes} />
    )
  }
}
