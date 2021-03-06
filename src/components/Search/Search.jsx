import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Search.scss';
import Icon from 'components/basic/Icon';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handleFilter = () => {
    this.setState({ query: '' });
  }

  toggleSearch = () => {
    this.setState({ query: '' });
    const value = this.props.isInSearchMode ? '/' : '/search';
    this.props.history.push(value);
    if (this.props.isInSearchMode) this.nameInput.focus();
  }

  handleSearch = (e) => {
    const value = e.target.value;
    this.setState({ query: value });
    this.props.history.push(`/search/${value}`);
  }

  render() {
    const colors = ['white', 'red', 'orange', 'yellow', 'grey', 'blue', 'teal', 'green'];

    const circles = colors.map(item => (
      <NavLink
        activeClassName={styles.chosen}
        className={`${styles[item]}`}
        onClick={this.handleFilter}
        key={item}
        to={`/search/colors/${item}`}
      />));

    return (
      <div className={styles.searchWrapper} >
        {this.props.isInSearchMode && <div className={styles.wrapper} >
          <div className={styles.filters} >
            {circles}
          </div>
          <input
            ref={(el) => { this.nameInput = el; }}
            onChange={this.handleSearch}
            value={this.state.query}
            className={styles.input}
            autoFocus
            type="text"
            placeholder="Search for..."
          />
          <NavLink to="/search/images/all" onClick={this.handleFilter} >
            <div className={styles.iconWrapper} >
              <Icon name="image" className={styles.icon} />
            </div>
          </NavLink>
          <NavLink to={this.props.isInSearchMode ? '/' : '/search'} >
            <div className={styles.iconWrapper} >
              <Icon name={this.props.isInSearchMode ? 'close' : 'search'} className={styles.icon} />
            </div>
          </NavLink>
        </div>}
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  history: PropTypes.object.isRequired,
  isInSearchMode: PropTypes.bool.isRequired,
};
