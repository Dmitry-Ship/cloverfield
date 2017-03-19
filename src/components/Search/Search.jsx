import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '../basic/Button';
import styles, { button, icon, input, iconWrapper } from './Search.scss';
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
    this.handleColorSet = this.handleColorSet.bind(this);
  }

  handleColorSet() {
    this.props.onChange('');
    this.setState({ query: '' });
  }

  toggleSearch() {
    this.setState({ isOpen: !this.state.isOpen });
    this.props.onChange('');
  }

  handleSearch(e) {
    const value = e.target.value;
    this.setState({ query: value });
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
        <Link onClick={this.handleColorSet} key={item} to={`/colors/${item}`} >
          <span className={`${styles[item]} ${chosen}`} />
        </Link>
      );
    });

    return (
      <div style={style} >
        {this.state.isOpen ?
          <input onChange={this.handleSearch} value={this.state.query} className={input} type="text" placeholder="Search for..." /> :
          <Button kind="secondary" size="small" className={button} onClick={this.toggleSearch} >Search</Button>}

        <div style={{ display: this.state.isOpen ? 'flex' : 'none' }} >
          <Link to="/images/all" >
            <div className={iconWrapper} >
              <Icon name="image" className={icon} />
            </div>
          </Link>
          {circles}
          <Button kind="secondary" size="small" className={button} onClick={this.toggleSearch} >Cancel</Button>
        </div>


      </div>
    );
  }
}

export default Search;
