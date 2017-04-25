import React from 'react';
import PropTypes from 'prop-types';
import ChangePasswordFrom from '../forms/ChangePasswordForm';
import Heading from '../basic/Heading';
import FancyLink from '../basic/FancyLink';
import { card } from './ChangePasswordCard.scss';

const ChangePasswordCard = ({ onForgotClick, ...rest }) => (
  <div className={card} >
    <Heading>Change password</Heading>
    <ChangePasswordFrom {...rest} />
    <FancyLink to="#" onClick={onForgotClick} >Forgot your password?</FancyLink>
  </div>
);

ChangePasswordCard.propTypes = {
  onForgotClick: PropTypes.func.isRequired,
};

export default ChangePasswordCard;
