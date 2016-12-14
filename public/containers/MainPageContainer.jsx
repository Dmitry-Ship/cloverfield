import React, { Component } from 'react';

import axios from 'axios';

import MainPage from '../pages/MainPage';

export default class MainPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      allNotes: []
    };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    axios.get('/notes')
      .then(res => this.setState({ allNotes: res.data }))
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


  render() {
    return (
      <MainPage onSubmit={this.submit} allNotes={this.state.allNotes} />
    );
  }
}

// const MainPageContainer = () => {
//
//   const myFunc = (title, content, color) => {
//     axios.post('/submit', {title: title, content: content, color: color})
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err));
//   }
//   return (
//     <MainPage onSubmit={myFunc} />
//   )
// }
//
// export default MainPageContainer;
