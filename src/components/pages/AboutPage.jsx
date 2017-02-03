import React, { Component } from 'react';

import { page } from './AboutPage.styl';

import Page from '../basic/Page';

export default class AboutPage extends Component {
  render() {
    return (
      <Page className={page}>
        <h1>This is the About Page</h1>
      </Page>
    );
  }
}
