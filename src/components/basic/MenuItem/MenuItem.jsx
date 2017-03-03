import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import Icon from '../Icon';

import { link, icon } from './MenuItem.scss';

const MenuItem = ({ item, className }) => (
  <Link className={`${link} ${className}`} onClick={item.func} to={item.to}>
    {item.iconName && <Icon className={icon} name={item.iconName} />}
    {item.label || null}
  </Link>
);

export default MenuItem;

MenuItem.defaultProps = {
  className: '',
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    to: PropTypes.string,
    iconName: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};
