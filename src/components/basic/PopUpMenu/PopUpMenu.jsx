import React, { PropTypes } from 'react';

import styles, { menuItem, item__link } from './PopUpMenu.styl';

import MenuItem from '../MenuItem';

const PopUpMenu = ({ items, className, children, position }) => (
  <div className={`${styles[position]} ${className}`} >
    {children}
    {items && items.map(item => (
      <MenuItem key={item.label} item={item} className={menuItem} />
    ))}
  </div>
);

export default PopUpMenu;

PopUpMenu.defaultProps = {
  className: '',
  position: 'top',
};

PopUpMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.any,
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

};
