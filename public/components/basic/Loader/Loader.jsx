import React, { PropTypes } from 'react';

import styles from './Loader.styl';

const Loader = ({ type }) => (
  <div className={styles.wrapper} >
    <div className={styles[type]}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  </div>
);

export default Loader;

Loader.defaultProps = {
  type: 'spinny'
}

Loader.propTypes = {
  type: PropTypes.string
}
