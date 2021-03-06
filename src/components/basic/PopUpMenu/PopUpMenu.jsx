import PropTypes from 'prop-types';
import React from 'react';
import styles from './PopUpMenu.scss';

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
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'topRight', 'bottomLeft']),

};
