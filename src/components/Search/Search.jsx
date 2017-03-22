import React, { PropTypes, Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../basic/Button';
import styles, { button, icon, input, iconWrapper, wrapper, chosen, filters } from './Search.scss';
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
    const style = {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: '3',
      top: '50%',
    };
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
      <div style={style} >

        {this.props.isInSearchMode && <div style={{ display: 'flex' }} className={wrapper} >
          <input
            ref={(el) => { this.nameInput = el; }}
            onChange={this.handleSearch}
            value={this.state.query}
            className={input}
            autoFocus
            type="text"
            placeholder="Search for..."
          />
          <div className={filters} >
            <NavLink to="/search/images/all" onClick={this.handleFilter} >
              <div className={iconWrapper} >
                <Icon name="image" className={icon} />
              </div>
            </NavLink>
            {circles}
          </div>
        </div>}

        <Button
          kind="secondary"
          size="small"
          className={button}
          onClick={this.toggleSearch}
        >
          {this.props.isInSearchMode ? 'Cancel' : 'Search'}
        </Button>
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  history: PropTypes.object.isRequired,
  isInSearchMode: PropTypes.bool.isRequired,
};
