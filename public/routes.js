import React from 'react';
import { render } from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import './styles/index.styl';

import MainPageContainer from './containers/MainPageContainer';
import AboutPage from './pages/AboutPage';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import { Provider } from 'react-redux';

const mathReducer = (state = {
  result: 1,
  lastValues: [],
}, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case 'SUBSTRACT':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }
  return state;
};

const userReducer = (state = {
  name: 'Dima',
  age: 25,
}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload,
      };
      break;
  }
  return state;
};

const store = createStore(combineReducers({ mathReducer, userReducer }), {}, applyMiddleware(logger()));

store.subscribe(() => {
  console.log('Store updated', store.getState());
});

render((
  <Provider store={store} >
    <Router history={hashHistory}>
      <Route component={MainLayout} >
        <Route path="/" component={MainPageContainer} />
        <Route path="/about" component={AboutPage} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
), document.getElementById('root'));
