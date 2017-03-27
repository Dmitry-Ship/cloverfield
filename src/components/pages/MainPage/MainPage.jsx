import React from 'react';

import { page } from './MainPage.scss';
import CreationFormContainer from '../../../containers/CreationFormContainer';
import NotesListContainer from '../../../containers/NotesListContainer';


const MainPage = ({ params }) => (
  <div className={page} >
    <CreationFormContainer />
    <NotesListContainer params={params} />
  </div>
);

export default MainPage;

