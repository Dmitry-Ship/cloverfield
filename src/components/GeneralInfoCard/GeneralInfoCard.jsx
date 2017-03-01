import React, { PropTypes } from 'react';

import { card, field } from './GeneralInfoCard.styl';
import Card from '../basic/Card';

const GeneralInfoCard = ({ tags, notes, images, className }) => (
  <Card className={`${card} ${className}`} >
    <h1 className={field} >Notes: {notes}</h1>
    <h1 className={field} >Images: {images}</h1>
    <h1 className={field} >Tags: {tags}</h1>
  </Card>
);

export default GeneralInfoCard;

GeneralInfoCard.defaultProps = {
  className: '',
};

GeneralInfoCard.propTypes = {
  className: PropTypes.string,
};
