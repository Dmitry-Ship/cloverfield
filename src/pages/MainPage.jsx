import React, { Component } from 'react';

import { Link } from 'react-router';

import styles from './MainPage.css';

import TextField from '../components/basic/TextField/TextField';
import Button from '../components/basic/Button';
import Heading from '../components/basic/Heading/Heading';
import MediaObject from '../components/basic/MediaObject/MediaObject';


const MainPage = () => (
    <div className={styles.page}>

      <MediaObject title='Hello World' icon="face" >
        Squid master cleanse marfa, snackwave bitters lumbersexual DIY occupy authentic. Meggings squid blog put a bird on it, listicle trust fund man bun organic austin tumeric unicorn intelligentsia lo-fi beard.
      </MediaObject>


      <TextField />
      <Button label="Click me!" />
      <Button kind='secondary' label="Click me!" />

    </div>
)

export default MainPage;
