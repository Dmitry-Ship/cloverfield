import React from 'react';

import { page } from './MainPage.scss';
import CreationFormContainer from 'containers/CreationFormContainer';
import NotesListContainer from 'containers/NotesListContainer';
import ExpandedCreationFormContainer from 'containers/ExpandedCreationFormContainer';

const MainPage = () => (
  <div className={page} >
    <CreationFormContainer />
    <NotesListContainer />
    <ExpandedCreationFormContainer />
  </div>
);

export default MainPage;

