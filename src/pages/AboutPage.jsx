import React, { Component } from 'react';

import { Link } from 'react-router';

import styles from './AboutPage.css';

import Heading from '../components/basic/Heading';
import Page from '../components/basic/Page';

const AboutPage = () => (
  <Page className={styles.page}>
    <Heading size={1}>This is the About Page</Heading>
  </Page>
)

export default AboutPage;
