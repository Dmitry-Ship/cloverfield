import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';


const PublicRoute = ({ component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      !isLoggedIn ?
        React.createElement(component, props) :
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )}
  />
);

export default PublicRoute;
