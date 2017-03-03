import React, { PropTypes } from 'react';

import styles from './Loader.scss';

const Loader = ({ type, className, text }) => (
  <div className={`${styles.wrapper} ${className}`} >
    <div className={styles[type]}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
    <h2 className={styles.loadingText} >{text}</h2>
  </div>
);

export default Loader;

Loader.defaultProps = {
  type: 'spinny',
  className: '',
  text: '',
};

Loader.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
};
