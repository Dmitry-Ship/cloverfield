import React, { PropTypes } from 'react';

import styles from './Loader.styl';

const Loader = ({ type, className }) => (
  <div className={`${styles.wrapper} ${className}`} >
    <div className={styles[type]}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  </div>
);

export default Loader;

Loader.defaultProps = {
  type: 'spinny',
  className: '',
};

Loader.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};
