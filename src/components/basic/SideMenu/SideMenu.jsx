import React, { Component, PropTypes } from 'react';

import styles from './SideMenu.css';

import { Link } from 'react-router';

import Icon from '../Icon';
import List from '../List';

export default class SideMenu extends Component {
  constructor() {
    super()
    this.state = {
      shown: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  toggleSideMenu() {
    this.setState({
      shown: !this.state.shown
    })
  }

  render() {
    const { shown } = this.state;
    const { SideMenuItems, className } = this.props;

    const customRenderer = (item, i) => {
      return (
        <li
          key={i}
          className={styles.item}
          onClick={item.func}>
            <Link className={styles.item__link} to={item.href || '#'} >
              {item.icon && <Icon className={styles.item__icon} size='30px' name={item.icon}/>}{item.text}
            </Link>
        </li>
      )
    }

    return (
      <div
        onClick={this.toggleSideMenu}
        className={`${styles.item} nav-bar__hamburger-button ${className}`}>
        <Icon className="nav-bar__icon" name="menu"/>
        <nav className={`${styles.sideMenu} ${shown && styles.shown}`} >
          <List
            className={styles.content}
            items={SideMenuItems}
            itemRenderer={customRenderer}/>
        </nav>
      </div>
    )
  }
}

SideMenu.propTypes = {
  SideMenuItems: PropTypes.arrayOf(React.PropTypes.object).isRequired
}
