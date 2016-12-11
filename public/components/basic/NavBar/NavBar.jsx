import React, { PropTypes } from 'react';

import { link, icon } from './NavBar.styl';

import { Link } from 'react-router';

import Row from '../Row';
import Icon from '../Icon';

const NavBar = ({ items, children, className, itemClass }) => (
  <Row className={`${className}`} auto={false} >
    {items.map(({ func, to, iconName, label }, i) => {
      return (
        <Link key={i} className={`${link} ${itemClass}`} onClick={func} to={to}>
          {iconName && <Icon className={icon} name={iconName}/>}
          {label || null}
        </Link>
      )
    })
  }
  {children}
  </Row>
)

export default NavBar;

NavBar.propTypes = {
   items: PropTypes.arrayOf(PropTypes.object).isRequired,
   children: PropTypes.any,
   className: PropTypes.string,
   itemClassName: PropTypes.string

}
