import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import Row from '../Row';
import Icon from '../Icon';

const NavBar = ({items, children, className, itemClassName}) => (
  <Row className={`nav-bar ${className}`} auto={false} >
    {items.map((item, i) => {
      return (
        <Link key={i} className={`nav-bar__item ${itemClassName}`} onClick={item.func} to={item.to}>
          {item.icon && <Icon className='nav-bar__icon' name={item.icon}/>}
          {item.label || null}
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
