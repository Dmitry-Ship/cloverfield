import React, { Component } from 'react'
;
import Heading from '../basic/Heading';
import TextField from '../basic/TextField';
import Button from '../basic/Button';
import { card, form, input } from './Game.scss';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      secretNumber: Math.floor(Math.random() * 100) + 1,
      message: '',
      done: false,
      tries: 0,
      maxTries: 10,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.setState({
      value: '',
      secretNumber: Math.floor(Math.random() * 100) + 1,
      message: '',
      done: false,
      tries: 0,
      maxTries: 10,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { done, value, maxTries, secretNumber } = this.state;
    let { tries } = this.state;

    if (done) { return; }

    if (isNaN(value) || value === '') {
      this.setState({ message: 'Enter a number' });
      return;
    }
    const guess = parseInt(value);

    this.setState({ tries: tries += 1 });

    const triesLelft = maxTries - tries;

    if (guess === secretNumber) {
      this.setState({
        message: `Yes, you guessed it! It took you ${tries} tries!`,
        done: true,
      });
    } else if (guess < secretNumber) {
      const message = triesLelft ? `The number is greater! You have ${triesLelft} tries left!` : 'The number is greater! You have no tries left!';
      this.setState({
        message,
        done: !triesLelft,
      });
    } else {
      const message = triesLelft ? `The number is smaller! You have ${triesLelft} tries left!` : 'The number is greater! You have no tries left!';
      this.setState({
        message,
        done: !triesLelft,
      });
    }
  }

  handleChange(e) {
    const newValue = e.target.value;
    this.setState({ value: newValue });
  }

  render() {
    const { message, done, value } = this.state;
    return (
      <div className={card} >
        <Heading>The Game</Heading>
        <h3>I have a number from 1 to 100 in mind, try to guess it</h3>
        <h3>{message}</h3>

        <form action="" onSubmit={this.handleSubmit} className={form} >
          <TextField
            className={input}
            onChange={this.handleChange}
            placeholder="Enter your guess"
            value={value}
          />
          {done ? <Button label="Try agian!" onClick={this.refresh} /> : <Button />}
        </form>
      </div>
    );
  }
}

Game.propTypes = {

};

export default Game;
