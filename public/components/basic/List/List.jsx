import React, { PropTypes } from 'react';

import Icon from '../Icon';
import { Link } from 'react-router';

const List = ({ children, className, itemRenderer, items }) => (
  <ul className={className}>
    {children}
    {items.map((item, i) => itemRenderer(item, i))}
  </ul>
)

export default List;

List.defaultProps = {
  itemRenderer: (item, i) => <li key={i}>{item}</li>
}

List.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  itemRenderer: PropTypes.func,

}
