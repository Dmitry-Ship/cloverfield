import React from 'react';

import TechCard from '../../TechCard';
import Game from '../../Game';
import { page } from './AboutPage.scss';

const AboutPage = () => (
  <div className={page} >
    <TechCard />
    <Game />
  </div>
);

export default AboutPage;

