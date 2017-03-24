import React, { PropTypes, Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../basic/Button';
import styles, { button, icon, input, iconWrapper, wrapper, chosen, filters, searchWrapper } from './Search.scss';
import Icon from '../basic/Icon';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter() {
    this.setState({ query: '' });
  }

  toggleSearch() {
    this.setState({ query: '' });
    const value = this.props.isInSearchMode ? '/' : '/search';
    this.props.history.push(value);
    if (this.props.isInSearchMode) this.nameInput.focus();
  }

  handleSearch(e) {
    const value = e.target.value;
    this.setState({ query: value });
    this.props.history.push(`/search/${value}`);
  }

  render() {
    const colors = ['white', 'red', 'orange', 'yellow', 'grey', 'blue', 'teal', 'green'];

    const circles = colors.map(item => (
      <NavLink
        activeClassName={chosen}
        className={`${styles[item]}`}
        onClick={this.handleFilter}
        key={item}
        to={`/search/colors/${item}`}
      />));

    return (
      <div className={searchWrapper} >

        {this.props.isInSearchMode && <div className={wrapper} >
          <div className={filters} >
            {circles}
          </div>
          <input
            ref={(el) => { this.nameInput = el; }}
            onChange={this.handleSearch}
            value={this.state.query}
            className={input}
            autoFocus
            type="text"
            placeholder="Search for..."
          />
            <NavLink to="/search/images/all" onClick={this.handleFilter} >
              <div className={iconWrapper} >
                <Icon name="image" className={icon} />
              </div>
            </NavLink>
          <NavLink to={this.props.isInSearchMode ? '/' : '/search'} >
            <div className={iconWrapper} >
              <Icon name={this.props.isInSearchMode ? 'close' : 'search'} className={icon} />
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
