import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './root.jsx';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>
  , document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./root.jsx', () => {
    const NextApp = require('./root.jsx').default;
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
