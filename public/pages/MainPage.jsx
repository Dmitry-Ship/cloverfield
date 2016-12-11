import React, { Component } from 'react';

import { Link } from 'react-router';

import { page } from './MainPage.styl';

import Page from '../components/basic/Page';
import MediaObject from '../components/basic/MediaObject';

import CreationFrom from '../components/CreationForm';

const MainPage = ({ onSubmit }) => (
    <Page className={page}>

      <MediaObject name="person" titleText="Hello World" icon="face" >
        <p>master cleanse marfa, snackwave bitters lumbersexual DIY occupy authentic. Meggings squid blog put a bird on it, listicle trust fund man bun organic austin tumeric unicorn intelligentsia lo-fi beard.</p>
      </MediaObject>

      <CreationFrom
        onSubmit={onSubmit}
        titlePlaceholder="Title"
        contentPlaceholder="Content" />

    </Page>
)

export default MainPage;
