import React, { PropTypes } from 'react';

const Loader = ({type}) => (
  <div className='loader__wrapper' >
    <div className={`loader--${type}`}>
      <span className='loader__dot' />
      <span className='loader__dot' />
      <span className='loader__dot' />
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
