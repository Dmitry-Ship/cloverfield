import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.scss';
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
          activeClassName={styles.active}
          className={styles.link}
          to={item.to}
          key={item.label}
        >
          <div className={styles.content} >
            {item.iconName && <Icon className={styles.icon} name={item.iconName} />}
            {item.label && <span className={styles.text}>{item.label}</span>}
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
