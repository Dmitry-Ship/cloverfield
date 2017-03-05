import React, { Component } from 'react';

import Page from '../basic/Page';
import Card from '../basic/Card';
import { card, icon } from './AboutPage.scss';

export default class AboutPage extends Component {
  render() {
    return (
      <Page >
        <Card className={card}>
          <img className={icon} src="/logos/nodejs-icon.svg" alt="" />
          <img className={icon} src="/logos/react.svg" alt="" />
          <img className={icon} src="/logos/sass-1.svg" alt="" />
          <img className={icon} src="/logos/github-icon-1.svg" alt="" />
          <img className={icon} src="/logos/webpack.svg" alt="" />
          <img className={icon} src="/logos/redux.svg" alt="" />
          <img className={icon} src="/logos/mongodb.svg" alt="" />
          <img className={icon} src="/logos/express-109.svg" alt="" />
          <img className={icon} src="/logos/npm.svg" alt="" />
          <img className={icon} src="/logos/es6.svg" alt="" />
          <img className={icon} src="/logos/babel-10.svg" alt="" />
          <img className={icon} src="/logos/css-modules-logo.png" alt="" />
          <img className={icon} src="/logos/postcss.svg" alt="" />
          
        </Card>
      </Page>
    );
  }
}
