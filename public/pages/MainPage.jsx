import React from 'react';

import { page } from './MainPage.styl';

import Page from '../components/basic/Page';
import CreationFrom from '../components/CreationForm';
import NotesList from '../components/NotesList';

const MainPage = ({
  userName,
  onSubmit,
  allNotes,
  onSetColor,
  onUpdateTitle,
  onUpdateContent,
  onDelete }) => (
  <Page className={page}>
    <h1>{userName}</h1>

    <CreationFrom
      onSubmit={onSubmit}
      titlePlaceholder="Title"
      contentPlaceholder="Content"
    />

    <NotesList
      onSetColor={onSetColor}
      onUpdateTitle={onUpdateTitle}
      onUpdateContent={onUpdateContent}
      onDelete={onDelete}
      allNotes={allNotes}
    />

  </Page>
);

export default MainPage;
