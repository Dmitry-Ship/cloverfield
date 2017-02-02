import React, { Component } from 'react';

import { page } from './AboutPage.styl';

import Heading from '../basic/Heading';
import Page from '../basic/Page';

export default class AboutPage extends Component {
  render() {
    return (
      <Page className={page}>
        <Heading size={1}>This is the About Page</Heading>
      </Page>
    );
  }
}
