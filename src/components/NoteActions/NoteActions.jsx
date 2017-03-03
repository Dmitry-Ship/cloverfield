import React from 'react';

import ColorMenu from '../ColorMenu';
import NoteFileUploader from '../NoteFileUploader';
import Row from '../basic/Row';
import { icon } from './NoteActions.scss';

const NoteActions = ({ color, onSetColor, onChange, id, children, className }) => (
  <Row align="space-around" className={className}>
    <ColorMenu color={color} onSetColor={onSetColor} className={icon} />
    <NoteFileUploader onChange={onChange} className={icon} id={id} />
    {children}
  </Row>
)

export default NoteActions;
