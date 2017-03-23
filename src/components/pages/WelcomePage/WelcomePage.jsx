import React from 'react';
import { page, heroTitle, note, icon, heroSub, wrapper } from './WelcomePage.scss';
import GetStartedContainer from '../../../containers/GetStartedContainer';
import Icon from '../../basic/Icon';
const WelcomePage = () => (
  <div className={page}>
    <div className={wrapper} >

      <h1 className={heroTitle} >One place to store all your ideas.</h1>
      <div className={note} >
        <Icon className={icon} name="palette" />
        <Icon className={icon} name="image" />
        <Icon className={icon} name="label" />
      </div>
      <h2 className={heroSub} >Cloverfield is an advanced todo app.</h2>
    </div>
    
    <GetStartedContainer />
  </div>
);

export default WelcomePage;
