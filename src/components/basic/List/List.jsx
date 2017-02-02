import React, { PropTypes } from 'react';

const List = ({ children, className, itemRenderer, items }) => (
  <ul className={className}>
    {children}
    {items.map((item, i) => itemRenderer(item, i))}
  </ul>
);

export default List;

List.defaultProps = {
  itemRenderer: (item, i) => <li key={i}>{item}</li>,
  className: '',
};

List.propTypes = {
  items: PropTypes.array,
  children: PropTypes.any,
  className: PropTypes.string,
  itemRenderer: PropTypes.func,
};
