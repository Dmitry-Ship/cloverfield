import React, { PropTypes } from 'react';

import styles from './PopUpMenu.styl';


const PopUpMenu = ({ className, children, position }) => (
  <div className={`${styles[position]} ${className}`} >
    {children}
  </div>
);

export default PopUpMenu;

PopUpMenu.defaultProps = {
  className: '',
  position: 'top',
};

PopUpMenu.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

};
