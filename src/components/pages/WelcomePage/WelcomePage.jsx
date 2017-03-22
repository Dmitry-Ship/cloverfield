import React from 'react';
import { page, heroTitle, note, noteText, heroSub, wrapper } from './WelcomePage.scss';
import GetStartedContainer from '../../../containers/GetStartedContainer';

const WelcomePage = () => (
  <div className={page}>
    <div className={wrapper} >

      <h1 className={heroTitle} >One place to store all your ideas.</h1>
      <div className={note} >
        <span className={noteText} >Just</span>
        <span className={noteText} >take</span>
        <span className={noteText} >a</span>
        <span className={noteText} >note</span>
      </div>
      <h2 className={heroSub} >Cloverfield is an advanced todo app.</h2>
    </div>
    
    <GetStartedContainer />
  </div>
);

export default WelcomePage;
