import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../basic/Button';
import styles, { button, icon, input, iconWrapper, wrapper } from './Search.scss';
import Icon from '../basic/Icon';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      query: '',
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter() {
    this.props.onChange('');
    this.setState({ query: '' });
    this.props.history.push('/');
  }

  toggleSearch() {
    this.setState({ isOpen: !this.state.isOpen, query: '' });
    this.props.onChange('');
    this.props.history.push('/');
    
  }

  handleSearch(e) {
    const value = e.target.value;
    this.setState({ query: value });
    this.props.history.push('/');
    this.props.onChange(value);
  }

  render() {
    const { match } = this.props;
    const style = {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '56px',
      zIndex: '3',
      top: '50%',
      background: 'white',
    };
    const colors = ['white', 'red', 'orange', 'yellow', 'grey', 'blue', 'teal', 'green'];

    const circles = colors.map((item) => {
      const chosen = item === 'white' ? styles.chosen : '';
      return (
        <Link onClick={this.handleFilter} key={item} to={`/colors/${item}`} >
          <span className={`${styles[item]} ${chosen}`} />
        </Link>
      );
    });

    return (
      <div style={style} >

        <div style={{ display: this.state.isOpen ? 'flex' : 'none' }} className={wrapper} >
          <input
            onChange={this.handleSearch}
            value={this.state.query}
            className={input}
            type="text"
            placeholder="Search for..."
          />
          <Link to="/images/all" onClick={this.handleFilter} >
            <div className={iconWrapper} >
              <Icon name="image" className={icon} />
            </div>
          </Link>
          {circles}
        </div>

        {!this.state.isOpen ?
          <Button kind="secondary" size="small" className={button} onClick={this.toggleSearch} >Search</Button> :
          <Button kind="secondary" size="small" className={button} onClick={this.toggleSearch} >Cancel</Button>}

      </div>
    );
  }
}

export default Search;
