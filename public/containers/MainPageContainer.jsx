import React, { Component } from 'react';

import axios from 'axios';

import MainPage from '../pages/MainPage';

export default class MainPageContainer extends Component {
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
    this.submit = this.submit.bind(this);

  }

  submit(data) {
    axios.post('/submit', data)
    .then(res => {
      const prevList = this.state.allNotes;
      this.setState({allNotes: prevList.concat([res.data])})
    })
    .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.allNotes);
    return (
      <MainPage onSubmit={this.submit} allNotes={this.state.allNotes} />
    )
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
