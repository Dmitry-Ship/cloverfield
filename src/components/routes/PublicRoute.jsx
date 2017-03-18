import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';


const PublicRoute = (mainProps) => {
  const noComponent = Object.assign({}, mainProps, { component: undefined });
  return (
    <Route
      {...noComponent}
      render={props => (
        !mainProps.isLoggedIn ?
          React.createElement(mainProps.component, props) :
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )}
    />
  );
};

export default PublicRoute;
