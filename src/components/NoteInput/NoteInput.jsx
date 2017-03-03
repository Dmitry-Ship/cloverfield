import React, { PropTypes, Component } from 'react';

import Textarea from 'react-textarea-autosize';

import { input, mask } from './NoteInput.scss';


export default class NoteInput extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      editing: true,
    });
  }

  handleBlur(e) {
    this.setState({
      editing: false,
    });

    this.props.onBlur(e);
  }

  render() {
    const { initialValue, value, onChange, onBlur, className } = this.props;
    const { editing } = this.state;
    return (
      <div>
        <div
          onClick={this.handleClick}
          style={{ display: editing ? 'none' : 'block', background: 'deeppink' }}
          className={mask}
        >
          {initialValue}
        </div>
        <Textarea
          style={{
            display: editing ? 'block' : 'none',
            background: 'papayawhip',

           }}
          className={input}
          autoFocus={true}
          onChange={onChange}
          onBlur={this.handleBlur}
          value={value}
        />
      </div>
    );
  }
}

NoteInput.propTypes = {
  initialValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
