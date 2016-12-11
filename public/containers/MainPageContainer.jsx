import React, { Component } from 'react';

import axios from 'axios';

import MainPage from '../pages/MainPage';

const MainPageContainer = () => {
  const myFunc = (title, content, color) => {
    axios.post('/button', {title: title, content: content, color: color})
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }
  return (
    <MainPage onSubmit={myFunc} />
  )
}

export default MainPageContainer;
