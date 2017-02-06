import React, { PropTypes } from 'react';

import MenuItem from '../MenuItem';
import { menuItem } from './NavBar.styl';
import Row from '../Row';

const NavBar = ({ items, children, className, itemClass }) => (
  <Row className={`${className}`} auto={false} >
    {items.map(item => (
      <MenuItem key={item.label} className={`${menuItem} ${itemClass}`} item={item} />
    ))}
    {children}
  </Row>
);

export default NavBar;

NavBar.defaultProps = {
  className: '',
  itemClass: '',
};

NavBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  itemClass: PropTypes.string,
};
