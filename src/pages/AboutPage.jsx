import React from 'react';

import { page } from './AboutPage.styl';

import Heading from '../components/basic/Heading';
import Page from '../components/basic/Page';

const AboutPage = () => (
  <Page className={page}>
    <Heading size={1}>This is the About Page</Heading>
  </Page>
);

export default AboutPage;
