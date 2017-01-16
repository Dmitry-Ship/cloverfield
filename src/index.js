import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import './styles/index.styl';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';

import configureStore from './store/configureStore';

const store = configureStore();

function isNotLoggedIn(nextState, replace, next) {
  if (!store.getState().authReducer.isLoggedIn) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
  next();
}

function isLoggedIn(nextState, replace, next) {
  if (store.getState().authReducer.isLoggedIn) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    });
  }
  next();
}

render((
  <Provider store={store} >
    <Router history={hashHistory}>
      <Route path="/" component={MainLayout} >
        <IndexRoute component={MainPage} onEnter={isNotLoggedIn} />
        <Route path="about" component={AboutPage} onEnter={isNotLoggedIn} />
        <Route path="login" component={LoginPage} onEnter={isLoggedIn} />
        <Route path="signup" component={SignUpPage} onEnter={isLoggedIn} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
), document.getElementById('root'));
