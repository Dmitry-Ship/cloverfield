import PropTypes from 'prop-types';
import React from 'react';
import ColorMenu from '../ColorMenu';
import NoteFileUploader from '../NoteFileUploader';
import { icon } from './NoteActions.scss';

const NoteActions = ({ color, onSetColor, onChange, id, children, className }) => {
  const style = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  return (
    <div style={style} className={className}>
      <ColorMenu color={color} position="topRight" onSetColor={onSetColor} className={icon} />
      <NoteFileUploader onChange={onChange} className={icon} id={id} />
      {children}
    </div>
  );
};

NoteActions.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string.isRequired,
  onSetColor: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default NoteActions;
