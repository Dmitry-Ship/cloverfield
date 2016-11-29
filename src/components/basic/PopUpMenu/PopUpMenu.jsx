import React, { PropTypes } from 'react';

import styles from './PopUpMenu.css';

import { Link } from 'react-router';
import List from '../List';

const PopUpMenu = ({ items, className, children }) => {
  const customRender = (li, i) => {
    return (
      <li className={styles.item} key={i} onMouseDown={li.func}>
        {li.href
          ? <Link className={styles.item__link} to={li.href}>{li.text}</Link>
          : li.text}
      </li>
    )
  }

  return (
    <div className={`${styles.popupMenu} ${className ? className : ""}`}  >
      {children}
      {items && <List className={styles.list} items={items} itemRenderer={customRender}/>}
    </div>
  )
}

export default PopUpMenu;

PopUpMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.element,
  className: PropTypes.string

}
