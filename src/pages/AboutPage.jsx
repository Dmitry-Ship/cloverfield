import React, { Component } from 'react';

import { Link } from 'react-router';

import styles from './AboutPage.css';

import Heading from '../components/basic/Heading/Heading';

const AboutPage = () => (
  <div className={styles.page}>
    <Heading size={1}>This is the About Page</Heading>
  </div>
)

export default AboutPage;
