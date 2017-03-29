import React from 'react';
import { page, heroTitle, greyNote, heroSub, wrapper, blueNote, heroTitleWrapper, buttons } from './WelcomePage.scss';
import GetStartedContainer from '../../../containers/GetStartedContainer';

const WelcomePage = () => (
  <div className={page}>
    <div className={wrapper} >
      <div className={heroTitleWrapper} >
        <h1 className={heroTitle} >One place</h1> 
        <h1 className={heroTitle} >to store</h1>
        <h1 className={heroTitle} >all your ideas.</h1> 
      </div>
      <div className={greyNote} ></div>
      <div className={blueNote} ></div>

      <h2 className={heroSub} >Cloverfield is an advanced todo app with ability to add images and tags.</h2>
    </div>
    <div className={buttons} >
      <GetStartedContainer />
    </div>
  </div>
);

export default WelcomePage;
