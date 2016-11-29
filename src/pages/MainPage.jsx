import React, { Component } from 'react';

import { Link } from 'react-router';

import TextField from '../components/basic/TextField/TextField';
import Button from '../components/basic/Button/Button';
import Heading from '../components/basic/Heading/Heading';
import Loader from '../components/basic/Loaders/Loader';

const MainPage = () => (
    <div className='main-page'>

      <Heading size={1}>Hello World</Heading>

      <TextField />
      <Button label="Click me!" />
      <Button kind='secondary' label="Click me!" />
      <Loader type="triple-dots"/>

    </div>
)

export default MainPage;
