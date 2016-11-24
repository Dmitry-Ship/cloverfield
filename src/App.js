import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="hello">
        Hello World
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
