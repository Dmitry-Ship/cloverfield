import React from 'react';

import { page, message } from './NotFound.scss';

const NotFound = () => (
  <div className={page}>
    <div className={message}>
      <i className="material-icons">error_outline</i>
      <h1>Page not found!</h1>
    </div>
  </div>
);

export default NotFound;
