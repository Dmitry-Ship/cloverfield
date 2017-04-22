import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { link, icon, active, text, content } from './NavBar.scss';
import Icon from '../Icon';

const NavBar = ({ links, children, className }) => {
  const style = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <nav style={style} className={className} >
      {links.map(item => (
        <NavLink
          exact
          activeClassName={active}
          className={link}
          to={item.to}
          key={item.label}
        >
          <div className={content} >
            {item.iconName && <Icon className={icon} name={item.iconName} />}
            {item.label && <span className={text}>{item.label}</span>}
          </div>

        </NavLink>
      ))}
      {children}
    </nav>
  );
};

export default NavBar;

NavBar.defaultProps = {
  className: '',
  children: null,
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
};
