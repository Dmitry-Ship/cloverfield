import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import { link, icon } from './NavBar.styl';

import Row from '../Row';
import Icon from '../Icon';

const NavBar = ({ items, children, className, itemClass }) => (
  <Row className={`${className}`} auto={false} >
    {items.map((item, i) => <NavBarItem key={i} className={itemClass} item={item} />)}
    {children}
  </Row>
);


const NavBarItem = ({ item, className }) => (
  <Link className={`${link} ${className}`} onClick={item.func} to={item.to}>
    {item.iconName && <Icon className={icon} name={item.iconName} />}
    {item.label || null}
  </Link>
);

export default NavBar;

NavBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
};
