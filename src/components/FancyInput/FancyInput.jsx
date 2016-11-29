import React, { Component, PropTypes } from 'react';

import styles from './FancyInput.css';

import Textarea from 'react-textarea-autosize';

export default class FancyInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false
    };

    this.updateValue = this.updateValue.bind(this);
    this.showInput = this.showInput.bind(this);
  }

  showInput()  {
    this.setState({ editing: true });
  }

  updateValue(e) {
    const value = e.target.value
    this.props.onBlur(value, this.props.id);
    this.setState({ editing: false });
  }

  render() {
    const { text, maxLength } = this.props;

    return (
      <div
        className={styles.fancyInput} onClick={this.showInput}>
        {this.state.editing
          ? <Textarea
              defaultValue={text}
              autoFocus
              maxLength={maxLength}
              className={styles.input}
              onBlur={this.updateValue} />
          : <p className={styles.text}>{text}</p>}
      </div>
    )
  }
}

FancyInput.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  onBlur: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,

};
