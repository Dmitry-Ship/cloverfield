import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { item, item__link, popupMenu, list } from './PopUpMenu.styl';

import List from '../List';

const PopUpMenu = ({ items, className, children }) => {
  const customRender = ({ func, href, text }, i) => (
    <li className={item} key={i} onMouseDown={func}>
      {href
        ? <Link className={item__link} to={href}>{text}</Link>
        : text}
    </li>
  );

  return (
    <div className={`${popupMenu} ${className}`} >
      {children}
      {items && <List className={list} items={items} itemRenderer={customRender} />}
    </div>
  );
};

export default PopUpMenu;

PopUpMenu.defaultProps = {
  className: '',
};

PopUpMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.element,
  className: PropTypes.string,

};
