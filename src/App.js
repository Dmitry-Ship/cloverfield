import React, { Component } from 'react';
import { render } from 'react-dom';
import './main.styl'

import TextField from './basic/TextField/TextField.jsx';
import Button from './basic/Button/Button.jsx';
import Heading from './basic/Heading/Heading.jsx';
import Loader from './basic/Loaders/Loader.jsx';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">

        <Heading size={1}>Hello World</Heading>

        <TextField />
        <Button label="Click me!" />
        <Loader type="triple-dots"/>

      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
