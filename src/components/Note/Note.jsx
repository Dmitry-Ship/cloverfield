import React, { PropTypes } from 'react';

import styles from './Note.css';

import Row from '../basic/Row';
import Icon from '../basic/Icon';
import Card from '../basic/Card';
import ColorMenu from '../ColorMenu';
import FancyInput from '../FancyInput';
import MediaObject from '../basic/MediaObject';

import TagAreaContainer from '../../containers/TagAreaContainer.jsx';

const Note = ({ note,
                onDelete,
                children,
                onSetColor,
                onUpdateTitle,
                onUpdateContent }) => {

  const deleteNote = () => onDelete(note._id)

  return (
    <Card className={`${styles.note} ${styles[note.color]}`}>
      <div className={styles.content}>
        <FancyInput
          text={note.title}
          id={note._id}
          onBlur={onUpdateTitle}
          maxLength={24}
        />

        <FancyInput
          id={note._id}
          text={note.content}
          onBlur={onUpdateContent}
          maxLength={1000}
        />

      <TagAreaContainer note={note} />

        {children}
      </div>
      <Row align="space-between" className={styles.actions}>

        <ColorMenu
          className={styles.actions__icon}
          color={note.color}
          id={note._id}
          onSetColor={onSetColor}
        />

        <Icon
          className={styles.actions__icon} name="delete"
          onClick={deleteNote}
        />
        <Icon
          className={styles.actions__icon} name="more_vert"
        />
      </Row>
    </Card>
  )
}


export default Note;

Note.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onSetColor: PropTypes.func.isRequired,
  onUpdateTitle: PropTypes.func.isRequired,
  onUpdateContent: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
  children: PropTypes.any,
}
