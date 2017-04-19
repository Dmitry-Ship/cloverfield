import React from 'react';

import { page } from './MainPage.scss';
import CreationFormContainer from '../../../containers/CreationFormContainer';
import NotesListContainer from '../../../containers/NotesListContainer';
import ModalsContainer from '../../../containers/ModalsContainer';

const MainPage = () => (
  <div className={page} >
    <CreationFormContainer />
    <NotesListContainer />
    <ModalsContainer />
  </div>
);

export default MainPage;

