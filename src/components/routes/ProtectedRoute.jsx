import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

const PrivateRoute = (mainProps) => {
  const noComponent = Object.assign({}, mainProps, { component: undefined });
  return (
    <Route
      {...noComponent}
      render={props => (
        mainProps.isLoggedIn ?
          React.createElement(mainProps.component, props) :
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )}
    />
  );
};

export default PrivateRoute;
