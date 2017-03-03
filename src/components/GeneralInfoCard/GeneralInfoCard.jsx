import React, { PropTypes } from 'react';

import { card, field } from './GeneralInfoCard.scss';
import Card from '../basic/Card';

const GeneralInfoCard = ({ tags, notes, images, className }) => (
  <Card className={`${card} ${className}`} >
    <h2 className={field} >📝Notes: {notes}</h2>
    <h2 className={field} >🖼️Images: {images}</h2>
    <h2 className={field} >🏷️Tags: {tags}</h2>
  </Card>
);

export default GeneralInfoCard;

GeneralInfoCard.defaultProps = {
  className: '',
};

GeneralInfoCard.propTypes = {
  tags: PropTypes.number.isRequired,
  notes: PropTypes.number.isRequired,
  images: PropTypes.number.isRequired,
  className: PropTypes.string,
};
