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
      <ColorMenu color={color} onSetColor={onSetColor} className={icon} />
      <NoteFileUploader onChange={onChange} className={icon} id={id} />
      {children}
    </div>
  );
};

export default NoteActions;
