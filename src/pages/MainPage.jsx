import React from 'react';

import { page } from './MainPage.styl';

import Page from '../components/basic/Page';
import CreationFormContainer from '../containers/CreationFormContainer';
import NotesListContainer from '../containers/NotesListContainer';

const MainPage = () => (
  <Page className={page}>
    <CreationFormContainer />
    <NotesListContainer />
  </Page>
);

export default MainPage;
