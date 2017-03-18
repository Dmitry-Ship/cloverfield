import React from 'react';
import { page, heroTitle, note, noteText, heroSub } from './WelcomePage.scss';
import GetStartedContainer from '../../../containers/GetStartedContainer';

const WelcomePage = () => (
  <div className={page}>
    <h1 className={heroTitle} >One place to store all your ideas.</h1>
    <div className={note} >
      <span className={noteText} >Just</span>
      <span className={noteText} >take</span>
      <span className={noteText} >a</span>
      <span className={noteText} >note</span>
    </div>
    <h1 className={heroSub} >Cloverfield is an advanced todo app.</h1>
    
    <GetStartedContainer />
  </div>
);

export default WelcomePage;
