import React, { Component } from 'react';
import { render } from 'react-dom';

import TextField from './components/basic/TextField/TextField';
import Button from './components/basic/Button/Button';
import Heading from './components/basic/Heading/Heading';
import Loader from './components/basic/Loaders/Loader';
import MediaObject from './components/basic/MediaObject/MediaObject';

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
        <Button kind='secondary' label="Click me!" />

        <Loader type="triple-dots"/>
        {/* <MediaObject title="Hello World" >
          <p>Lol</p>
        </MediaObject> */}

      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
