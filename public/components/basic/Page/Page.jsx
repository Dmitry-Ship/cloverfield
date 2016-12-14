import React, { PropTypes } from 'react';

import { page } from "./Page.styl";

const Page = ({ className, children }) => (
  <div className={`${page} ${className}`} >
    {children}
  </div>
)

export default Page;

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
