import React from 'react';
import { 
  page, 
  heroTitle, 
  greyNote, 
  blueNoteWrapper, 
  greyNoteWrapper, 
  heroSub, 
  wrapper, 
  blueNote, 
  heroTitleWrapper,
  greyNotePosition,
  blueNotePosition, 
  buttons } from './WelcomePage.scss';
import GetStartedContainer from '../../../containers/GetStartedContainer';

const WelcomePage = () => (
  <div className={page}>
    <div className={wrapper} >
      <div className={blueNotePosition} >
        <div className={blueNoteWrapper} >
          <div className={heroTitleWrapper} >
            <h1 className={heroTitle} >One place</h1>
            <h1 className={heroTitle} >to store</h1>
            <h1 className={heroTitle} >all your ideas.</h1>
          </div>
          <div className={blueNote} />
        </div>
      </div>

      <div className={greyNotePosition} >
        <div className={greyNoteWrapper}>
          <div className={greyNote} />
          <h2 className={heroSub} >Cloverfield is an advanced todo app with ability to add images and tags.</h2>
        </div>
      </div>
    </div>
    {/*<div className={buttons} >*/}
      <GetStartedContainer />
    {/*</div>*/}
  </div>
);

export default WelcomePage;
