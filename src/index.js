import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import './styles/index.styl'; // do i even need this?

import MainPage from './components/pages/MainPage';
import AboutPage from './components/pages/AboutPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import NotFound from './components/pages/NotFound';
import MainLayout from './components/layouts/MainLayout';

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
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout} >
        <IndexRoute component={MainPage} onEnter={isNotLoggedIn} />
        <Route path="tags/:tagText" component={MainPage} onEnter={isNotLoggedIn} />
        <Route path="about" component={AboutPage} onEnter={isNotLoggedIn} />
        <Route path="login" component={LoginPage} onEnter={isLoggedIn} />
        <Route path="signup" component={SignUpPage} onEnter={isLoggedIn} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
), document.getElementById('root'));
