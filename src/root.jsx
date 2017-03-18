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
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import EditProfilePage from './components/pages/EditProfilePage';
import ViewProfilePage from './components/pages/ViewProfilePage';
import NotFound from './components/pages/NotFoundPage';
import Layout from './components/Layout';
import TopBar from './components/TopBar';

import ProtectedRoute from './components/routes/ProtectedRoute';
import PublicRoute from './components/routes/PublicRoute';

import Button from './components/basic/Button';
import LoginCardContainer from './containers/LoginCardContainer';



import ModalContainer from './containers/ModalContainer';
import { openModal } from './actions/UIActions';
const mapStateToProps = store => ({
  isLoggedIn: getIsLoggedIn(store),
  isLoggingIn: getIsLoggingIn(store),
  links: getIsLoggedIn(store) ? [
    { label: 'Home', iconName: 'home', to: '/' },
    { label: 'About', iconName: 'info_outline', to: '/about' },
    { label: 'Empty', iconName: 'not_interested', to: '/empty' },
  ] : [
    { label: 'Login', iconName: 'perm_identity', to: '/login' },
    { label: 'SignUp', iconName: 'person', to: '/signup' },
  ],
});

const mapDispatchToProps = dispatch => ({
  openModal: content => dispatch(openModal(content)),
});


const Routes = ({ isLoggedIn, isLoggingIn, links, openModal }) => (
  <Router>
    <Layout >
      <TopBar isLoggedIn={isLoggedIn} links={links} />
      <Button onClick={() => openModal(<LoginCardContainer />)}  label="Open" />
      <ModalContainer />
      <Switch>
        <ProtectedRoute exact path="/" component={MainPage} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/tags/:tagText" component={MainPage} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/about" component={AboutPage} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/profile" component={ViewProfilePage} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/editprofile" component={EditProfilePage} isLoggedIn={isLoggedIn} />
        <Route path="/forgotpassword" component={ForgotPasswordPage} />
        <Route path="/reset/:token" component={ResetPasswordPage} />
        <PublicRoute path="/login" component={LoginPage} isLoggedIn={isLoggedIn} />
        <PublicRoute path="/signup" component={SignUpPage} isLoggedIn={isLoggedIn} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

const RoutesContainer = connect(mapStateToProps, mapDispatchToProps)(Routes);

const Root = ({ store }) => (
  <Provider store={store} >
    <RoutesContainer />
  </Provider>
);

export default Root;
