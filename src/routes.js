import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles/index.styl';

import { Router, Route, Link, hashHistory } from 'react-router'

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';

render((
  <Router history={hashHistory}>
    <Route component={MainLayout} >
      <Route path="/" component={MainPage} />
      <Route path="/about" component={AboutPage}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('root'));
