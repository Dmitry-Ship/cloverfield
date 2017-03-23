import React from 'react';
import { Provider, connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './styles/index.scss';

import { getIsLoggedIn, getIsLoggingIn } from './reducers/authReducer';

import MainPage from './components/pages/MainPage';
import AboutPage from './components/pages/AboutPage';
import WelcomePage from './components/pages/WelcomePage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import EditProfilePage from './components/pages/EditProfilePage';
import ViewProfilePage from './components/pages/ViewProfilePage';
import NotFound from './components/pages/NotFoundPage';
import Layout from './components/Layout';

import ProtectedRoute from './components/routes/ProtectedRoute';
import PublicRoute from './components/routes/PublicRoute';

import TopBarContainer from './containers/TopBarContainer';
import ModalsContainer from './containers/ModalsContainer.jsx';
import LightBoxContainer from './containers/LightBoxContainer.jsx';


const mapStateToProps = store => ({
  isLoggedIn: getIsLoggedIn(store),
  isLoggingIn: getIsLoggingIn(store),
});

const Routes = ({ isLoggedIn, isLoggingIn }) => (
  <Router>
    <Layout >
      <TopBarContainer />
      <ModalsContainer />
      <LightBoxContainer />
      <Switch>
        <ProtectedRoute exact path="/" component={MainPage} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/tags/:tagText" component={MainPage} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/search/colors/:color" component={MainPage} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/search/images/:images" component={MainPage} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/search/:query" component={MainPage} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/search" component={MainPage} isLoggedIn={isLoggedIn} />
        
        <Route path="/about" component={AboutPage} />
        <ProtectedRoute path="/profile" component={ViewProfilePage} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/editprofile" component={EditProfilePage} isLoggedIn={isLoggedIn} />
        <Route path="/reset/:token" component={ResetPasswordPage} />
        <PublicRoute path="/welcome" component={WelcomePage} isLoggedIn={isLoggedIn} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

const RoutesContainer = connect(mapStateToProps)(Routes);

const Root = ({ store }) => (
  <Provider store={store} >
    <RoutesContainer />
  </Provider>
);

export default Root;
