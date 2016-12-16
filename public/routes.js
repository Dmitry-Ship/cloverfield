import React from 'react';
import { render } from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import './styles/index.styl';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';

render((
    <Router history={hashHistory}>
      <Route component={MainLayout} >
        <Route path="/" component={MainPage} />
        <Route path="/about" component={AboutPage} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>

), document.getElementById('root'));
