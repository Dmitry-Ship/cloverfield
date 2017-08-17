import React from 'react';
import styles from './WelcomePage.scss';
import GetStartedContainer from 'containers/GetStartedContainer';

const WelcomePage = () => (
  <div className={styles.page}>
    <div className={styles.wrapper} >
      <div className={styles.blueNotePosition} >
        <div className={styles.blueNoteWrapper} >
          <div className={styles.heroTitleWrapper} >
            <p className={styles.heroTitle} >One place</p>
            <p className={styles.heroTitle} >to store</p>
            <p className={styles.heroTitle} >all your ideas.</p>
          </div>
          <div className={styles.blueNote} />
        </div>
      </div>
      <div className={styles.greyNotePosition} >
        <div className={styles.greyNoteWrapper}>
          <div className={styles.greyNote} />
          <p className={styles.heroSub} >
            Cloverfield is an advanced todo app with ability to add images and tags.
          </p>
        </div>
      </div>
    </div>
    <GetStartedContainer />
  </div>
);

export default WelcomePage;
