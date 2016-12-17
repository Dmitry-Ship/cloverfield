import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, hashHistory } from 'react-router';

import './styles/index.styl';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';

import store from './store';

render((
  <Provider store={store} >
    <Router history={hashHistory}>
      <Route component={MainLayout} >
        <Route path="/" component={MainPage} />
        <Route path="/about" component={AboutPage} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>

), document.getElementById('root'));
