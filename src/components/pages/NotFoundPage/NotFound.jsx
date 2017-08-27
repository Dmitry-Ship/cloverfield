import React from 'react';

import styles from './NotFound.scss';

const NotFound = () => (
  <div className={styles.page}>
    <div className={styles.message}>
      <i className="material-icons">error_outline</i>
      <h1>Page not found!</h1>
    </div>
  </div>
);

export default NotFound;
