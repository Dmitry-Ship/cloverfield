import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { item, profile, avatar, popUpMenu, link, name } from './Profile.scss';

import Avatar from '../basic/Avatar';
import PopUpMenu from '../basic/PopUpMenu';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggleMenu() {
    this.setState({ isShown: !this.state.isShown });
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isShown: false });
    }
  }

  render() {
    const { user, className, onClick, profileRoute, editRoute } = this.props;
    return (
    <div className={`${profile} ${className}`} onClick={this.toggleMenu} ref={node => (this.wrapperRef = node)} >
      <Avatar className={avatar} src={user.userpic} />
      <PopUpMenu className={this.state.isShown ? popUpMenu : null} position="bottomLeft" >
        <div className={item} >
          <Link to={profileRoute} className={link} >
            <span className={name} >{user.fullName || user.username}</span>
            <span>View Profile</span>
          </Link>
        </div>
        <div className={item} >
          <Link to={editRoute} className={link} >Edit Profile</Link>
        </div>
        <div className={item} onClick={onClick} >
          <p className={link} >Log Out</p>
        </div>
      </PopUpMenu>
    </div>
    )
  }
}

Profile.defaultProps = {
  className: null,
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  profileRoute: PropTypes.string,
  editRoute: PropTypes.string,
  className: PropTypes.string,
};
