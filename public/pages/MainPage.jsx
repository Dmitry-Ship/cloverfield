import React from 'react';
import { Provider } from 'react-redux';

import { page } from './MainPage.styl';

import Page from '../components/basic/Page';
import CreationFromContainer from '../containers/CreationFormContainer';
import NotesListContainer from '../containers/NotesListContainer';

import store from '../store';

const MainPage = () => (
  <Page className={page}>
    <Provider store={store} >
      <CreationFromContainer />
    </Provider>
    <Provider store={store} >
      <NotesListContainer />
    </Provider>
  </Page>
);

export default MainPage;
