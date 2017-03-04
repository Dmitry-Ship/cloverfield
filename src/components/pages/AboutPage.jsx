import React, { Component } from 'react';

import Page from '../basic/Page';
import Card from '../basic/Card';
import { card, icon } from './AboutPage.scss';

export default class AboutPage extends Component {
  render() {
    return (
      <Page >
        <Card className={card}>
          <img className={icon} src="/nodejs-icon.svg" alt="" />
          <img className={icon} src="/react.svg" alt="" />
          <img className={icon} src="/sass-1.svg" alt="" />
          <img className={icon} src="/github-icon-1.svg" alt="" />
          <img className={icon} src="/webpack.svg" alt="" />
          <img className={icon} src="/redux.svg" alt="" />
          <img className={icon} src="/mongodb.svg" alt="" />
          <img className={icon} src="/express-109.svg" alt="" />
          <img className={icon} src="/npm.svg" alt="" />
          <img className={icon} src="/es6.svg" alt="" />
          <img className={icon} src="/babel-10.svg" alt="" />
          <img className={icon} src="/css-modules-logo.png" alt="" />
        </Card>
      </Page>
    );
  }
}
