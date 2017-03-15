import React from 'react';

import Heading from '../basic/Heading';
import { card, logo } from './TechCard.scss';

import Nodejs from './logos/nodejs-icon.svg';
import ReactLogo from './logos/react.svg';
import Sass from './logos/sass-1.svg';
import Git from './logos/github-icon-1.svg';
import Webpack from './logos/webpack.svg';
import Redux from './logos/redux.svg';
import MongoDB from './logos/mongodb.svg';
import Express from './logos/express-109.svg';
import NPM from './logos/npm.svg';
import ES6 from './logos/es6.svg';
import Babel from './logos/babel-10.svg';
import CSSModules from './logos/css-modules-logo.png';
import PostCSS from './logos/postcss.svg';

const TechCard = () => (
    <div className={card}>
      <Heading>Here is the list of technologies I was using during writing this app</Heading>
      <img className={logo} src={Nodejs} alt="" />
      <img className={logo} src={ReactLogo} alt="" />
      <img className={logo} src={Sass} alt="" />
      <img className={logo} src={Git} alt="" />
      <img className={logo} src={Webpack} alt="" />
      <img className={logo} src={Redux} alt="" />
      <img className={logo} src={MongoDB} alt="" />
      <img className={logo} src={Express} alt="" />
      <img className={logo} src={NPM} alt="" />
      <img className={logo} src={ES6} alt="" />
      <img className={logo} src={Babel} alt="" />
      <img className={logo} src={CSSModules} alt="" />
      <img className={logo} src={PostCSS} alt="" />
    </div>
);

export default TechCard;
