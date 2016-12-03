import React, { PropTypes } from 'react';

import styles from "./Page.css";

const Page = ({ className, children }) => {
  return (
    <div className={`${styles.page} ${className}`} >
      {children}
    </div>
  )
}

export default Page;

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
