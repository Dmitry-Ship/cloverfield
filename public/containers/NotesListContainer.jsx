import React, { Component } from 'react';

import axios from 'axios';

import NotesList from '../components/NotesList';

export default class NotesListContainer extends Component {
  constructor() {
    super();
  }

  setColor(color, id) {
    axios.put(`/notes/${id}`, { color: color })
      .then(res => console.log('success'))
      .catch(err => console.log(err));
  }

  updateTitle(value, id) {
    axios.put(`/notes/${id}`, { title: value })
      .then(res => console.log('success'))
      .catch(err => console.log(err));
  }

  updateContent(value, id) {
    axios.put(`/notes/${id}`, { content: value })
      .then(res => console.log('success'))
      .catch(err => console.log(err));
  }



  deleteNote(id) {
    axios.delete(`/notes/${id}`)
      .then(console.log('successfully removed'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <NotesList
        onSetColor={this.setColor}
        onUpdateTitle={this.updateTitle}
        onUpdateContent={this.updateContent}
        onDelete={this.deleteNote}
        allNotes={this.props.allNotes}
      />
    );
  }
}
