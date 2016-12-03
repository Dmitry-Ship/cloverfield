import React, { PropTypes } from 'react';

import styles from './NavBar.styl';

import { Link } from 'react-router';

import Row from '../Row';
import Icon from '../Icon';

const NavBar = ({items, children, className, itemClassName}) => (
  <Row className={`${className}`} auto={false} >
    {items.map((item, i) => {
      return (
        <Link key={i} className={`${styles.item} ${itemClassName}`} onClick={item.func} to={item.to}>
          {item.icon && <Icon className={styles.icon} name={item.icon}/>}
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
