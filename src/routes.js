import React, { Component } from 'react';
import { render } from 'react-dom';

import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import MainLayout from './layouts/MainLayout';

render((
  <Router history={hashHistory}>
    <Route path="/" component={MainLayout} >
      <IndexRoute component={MainPage} />
      <Route path="/about" component={AboutPage}/>
    </Route>
  </Router>
), document.getElementById('root'));
