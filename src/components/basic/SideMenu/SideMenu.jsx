import React, { Component, PropTypes } from 'react';

import { shown, sideMenu, content, menuItem, icon, wrapper } from './SideMenu.scss';

import MenuItem from '../MenuItem';
import Icon from '../Icon';

export default class SideMenu extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
    };
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  toggleSideMenu() {
    this.setState({
      isShown: !this.state.isShown,
    });
  }

  render() {
    const { className, items, children } = this.props;
    const { isShown } = this.state;
    return (
      <div className={wrapper}>
        <Icon name="menu" onClick={this.toggleSideMenu} className={icon} />
        <div className={`${isShown ? shown : sideMenu} ${className}`}>
          {children}
          <div className={content}>
            {items.map(item => <MenuItem className={menuItem} key={item.label} item={item} />)}
          </div>
        </div>
      </div>
    );
  }
}

SideMenu.defaultProps = {
  className: '',
};

SideMenu.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
