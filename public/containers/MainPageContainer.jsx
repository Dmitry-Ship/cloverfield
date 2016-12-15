import React, { Component } from 'react';

import axios from 'axios';

import MainPage from '../pages/MainPage';

import { connect } from 'react-redux';

class MainPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      allNotes: [],
    };
    this.submit = this.submit.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.setColor = this.setColor.bind(this);

  }

  componentDidMount() {
    axios.get('/notes')
      .then(res => this.setState({ allNotes: res.data }))
      .catch(err => console.log(err));
  }


  setColor(color, id) {
    axios.put(`/notes/${id}`, { color: color })
      .then(res => {
        const prevList = this.state.allNotes;
        prevList.map((item) => {
          if (item._id === id ) {
            return item.color = color;
          } else {
            return item
          }
        })
        this.setState({ allNotes: prevList });

      })
      .catch(err => console.log(err));
  }

  submit(data) {
    axios.post('/notes', data)
    .then(res => {
      const prevList = this.state.allNotes;
      this.setState({ allNotes: prevList.concat([res.data]) });
    })
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
      .then(res => {
        const prevList = this.state.allNotes;
        this.setState({ allNotes: prevList.filter((item) => item._id !== id) });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <MainPage
        onSetColor={this.setColor}
        onUpdateTitle={this.updateTitle}
        onUpdateContent={this.updateContent}
        onDelete={this.deleteNote}
        onSubmit={this.submit}
        allNotes={this.state.allNotes}
        userName={this.props.user.name}
       />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: 'SET_NAME',
        payload: name
      })
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
