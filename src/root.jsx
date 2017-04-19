import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { withRouter } from 'react-router';

import './styles/index.scss';

import { getIsLoggedIn, getIsLoggingIn } from './reducers';

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
import LightBoxContainer from './containers/LightBoxContainer.jsx';
import ExpandedNoteContainer from './containers/ExpandedNoteContainer.jsx';
import ExpandedNote from './components/ExpandedNote';


const mapStateToProps = store => ({
  isLoggedIn: getIsLoggedIn(store),
  isLoggingIn: getIsLoggingIn(store),
});

class Routes extends Component {

  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { isLoggedIn, isLoggingIn, location  } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )
    return (
        <Layout >
          <TopBarContainer />
          <LightBoxContainer />
          <Switch location={isModal ? this.previousLocation : location} >
            <ProtectedRoute exact path="/" component={MainPage} isLoggedIn={isLoggedIn} />
            <ProtectedRoute path="/tags/:tagText" component={MainPage} isLoggedIn={isLoggedIn} />
            <ProtectedRoute path='/notes/:noteId' component={ExpandedNoteContainer} isLoggedIn={isLoggedIn} />
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
          {isModal ? <ProtectedRoute path='/notes/:noteId' component={ExpandedNoteContainer} isLoggedIn={true} /> : null}
        </Layout>
    );
  }
}

const RoutesContainer = withRouter(connect(mapStateToProps)(Routes));

const MainRouter = () => (
  <Router> 
    <Route component={RoutesContainer} />
  </Router>
)
const Root = ({ store }) => (
  <Provider store={store} >
    <MainRouter />
  </Provider>
);

export default Root;
