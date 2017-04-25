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
import ES6 from './logos/es6.svg';
import Babel from './logos/babel-10.svg';
import CSSModules from './logos/css-modules-logo.png';
import PostCSS from './logos/postcss.svg';

const TechCard = () => {
  const logos = [Nodejs, ReactLogo, Sass, Git, Webpack, Redux, MongoDB, Express, ES6, Babel, CSSModules, PostCSS];
  return (
    <div className={card}>
      <Heading>Here is the list of technologies I was using during writing this app</Heading>
      {logos.map((item, i) => <img className={logo} key={i} src={item} alt="" />)}
    </div>
  );
};

export default TechCard;
