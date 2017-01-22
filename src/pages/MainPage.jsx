import React from 'react';

import { page } from './MainPage.styl';

import Page from '../components/basic/Page';
import CreationFormContainer from '../containers/CreationFormContainer';
import NotesListContainer from '../containers/NotesListContainer';

const MainPage = ({ params }) => (
  <Page className={page}>
    <CreationFormContainer />
    <NotesListContainer params={params} />
  </Page>
);

export default MainPage;
