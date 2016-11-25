import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import List from '../List';

const PopUpMenu = ({ items, className, children }) => {
  const customRender = (li, i) => {
    return (
      <li className="popup-menu__item" key={i} onMouseDown={li.func}>
        {li.href
          ? <Link className="popup-menu__item__link" to={li.href}>{li.text}</Link>
          : li.text}
      </li>
    )
  }

  return (
    <div className={`popup-menu ${className ? className : ""}`}  >
      {children}
      {items && <List className="popup-menu__list" items={items} itemRenderer={customRender}/>}
    </div>
  )
}

export default PopUpMenu;

PopUpMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.element,
  className: PropTypes.string

}
