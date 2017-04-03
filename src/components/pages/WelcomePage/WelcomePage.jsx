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
  blueNotePosition } from './WelcomePage.scss';
import GetStartedContainer from '../../../containers/GetStartedContainer';

const WelcomePage = () => (
  <div className={page}>
    <div className={wrapper} >
      <div className={blueNotePosition} >
        <div className={blueNoteWrapper} >
          <div className={heroTitleWrapper} >
            <p className={heroTitle} >One place</p>
            <p className={heroTitle} >to store</p>
            <p className={heroTitle} >all your ideas.</p>
          </div>
          <div className={blueNote} />
        </div>
      </div>
      <div className={greyNotePosition} >
        <div className={greyNoteWrapper}>
          <div className={greyNote} />
          <p className={heroSub} >
            Cloverfield is an advanced todo app with ability to add images and tags.
          </p>
        </div>
      </div>
    </div>
    <GetStartedContainer />
  </div>
);

export default WelcomePage;
