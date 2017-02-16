import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { link, icon, active, text, content } from './NavBar.styl';
import Icon from '../Icon';

const NavBar = ({ items, children, className }) => {
  const style = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <div style={style} className={className} >
      {items.map(item => (
        <Link
          activeClassName={active}
          onlyActiveOnIndex
          className={link}
          to={item.to}
          key={item.label}
        >
          <div className={content} >
            {item.iconName && <Icon className={icon} name={item.iconName} />}
            {item.label && <span className={text}>{item.label}</span>}
          </div>

        </Link>
      ))}
      {children}
    </div>
  );
};

export default NavBar;

NavBar.defaultProps = {
  className: '',
  children: null,
};

NavBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
};
