import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.scss';

import Avatar from 'components/basic/Avatar';
import PopUpMenu from 'components/basic/PopUpMenu';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggleMenu = () => {
    this.setState({ isShown: !this.state.isShown });
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isShown: false });
    }
  }

  render() {
    const { user, className, onLogout, profileRoute, editRoute } = this.props;
    return (
      <div className={`${styles.profile} ${className}`} onClick={this.toggleMenu} ref={node => (this.wrapperRef = node)} >
        <Avatar className={styles.avatar} src={user.userpic} />
        <PopUpMenu className={this.state.isShown ? styles.popUpMenu : null} position="bottomLeft" >
          <div className={styles.item} >
            <Link to={profileRoute} className={styles.link} >
              <span className={name} >{user.fullName || user.username}</span>
              <span>View Profile</span>
            </Link>
          </div>
          <div className={styles.item} >
            <Link to={editRoute} className={styles.link} >Edit Profile</Link>
          </div>
          <div className={styles.item} onClick={onLogout} >
            <p className={styles.link} >Log Out</p>
          </div>
        </PopUpMenu>
      </div>
    );
  }
}

Profile.defaultProps = {
  className: '',
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  profileRoute: PropTypes.string.isRequired,
  editRoute: PropTypes.string.isRequired,
  className: PropTypes.string,
};
