import React from 'react';

import { page } from './MainPage.scss';
import CreationFormContainer from '../../../containers/CreationFormContainer';
import NotesListContainer from '../../../containers/NotesListContainer';
import ExpandedNoteContainer from '../../../containers/ExpandedNoteContainer';


const MainPage = ({ params }) => (
  <div className={page} >
    <CreationFormContainer />
    <NotesListContainer params={params} />
    <ExpandedNoteContainer />
  </div>
);

export default MainPage;

