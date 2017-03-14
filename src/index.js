import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './root';

const store = configureStore();

render(
 <AppContainer>
   <Root store={store} />
 </AppContainer>
, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextApp = require('./root').default;
    render(
      <AppContainer>
        <NextApp store={store}/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
