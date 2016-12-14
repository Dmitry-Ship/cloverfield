import React from 'react';

import { page, message } from './NotFound.styl';

import Page from '../components/basic/Page';

const NotFound = () => (
  <Page className={page}>
    <div className={message}>
      <i className="material-icons">error_outline</i>
      <h1>Page not found!</h1>
    </div>
  </Page>
)

export default NotFound;
