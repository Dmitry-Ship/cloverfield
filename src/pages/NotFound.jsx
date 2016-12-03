import React from 'react';

import styles from './NotFound.css';

import Page from '../components/basic/Page';

const NotFound = () => (
  <Page className={styles.page}>
    <div className={styles.message}>
      <i className="material-icons">error_outline</i>
      <h1>Page not found!</h1>
    </div>
  </Page>
)

export default NotFound;
