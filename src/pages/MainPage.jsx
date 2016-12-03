import React, { Component } from 'react';

import { Link } from 'react-router';

import styles from './MainPage.styl';

import Page from '../components/basic/Page';
import Button from '../components/basic/Button';
import Heading from '../components/basic/Heading';
import MediaObject from '../components/basic/MediaObject';

import CreationFrom from '../components/CreationForm';
import LoginForm from '../components/LoginForm';

const MainPage = () => (
    <Page className={styles.page}>

      <MediaObject name="person" title="Hello World" icon="face" >
        <p>master cleanse marfa, snackwave bitters lumbersexual DIY occupy authentic. Meggings squid blog put a bird on it, listicle trust fund man bun organic austin tumeric unicorn intelligentsia lo-fi beard.</p>
      </MediaObject>

      <Button label="Click me!" />
      <Button kind="secondary" label="Click me!" />

      <CreationFrom titlePlaceholder="Title" contentPlaceholder="Content" />
      <LoginForm />

    </Page>
)

export default MainPage;
