import React, { PropTypes } from 'react';

import styles from './Note.styl';

import Row from '../basic/Row';
import Icon from '../basic/Icon';
import Card from '../basic/Card';
import ColorMenu from '../ColorMenu';
import FancyInput from '../FancyInput';

// import TagAreaContainer from '../../containers/TagAreaContainer.jsx';

const Note = ({ note,
                onDelete,
                children,
                onSetColor,
                onUpdateTitle,
                onUpdateContent }) => {
  const deleteNote = () => onDelete(note._id);
  const updateTitle = value => onUpdateTitle(value, note._id);
  const updateContent = value => onUpdateContent(value, note._id);
  const setColor = color => onSetColor(color, note._id);

  return (
    <Card className={`${styles.note} ${styles[note.color]}`}>
      <div className={styles.content}>
        <FancyInput
          text={note.title}
          onBlur={updateTitle}
          maxLength={24}
        />

        <FancyInput
          text={note.content}
          onBlur={updateContent}
          maxLength={1000}
        />
{/* <TagAreaContainer note={note} /> */}

        {children}
      </div>

      <Row align="space-between" className={styles.actions}>

        <ColorMenu
          className={styles.actions__icon}
          color={note.color}
          onSetColor={setColor}
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
  );
};


export default Note;

Note.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onSetColor: PropTypes.func.isRequired,
  onUpdateTitle: PropTypes.func.isRequired,
  onUpdateContent: PropTypes.func.isRequired,
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  children: PropTypes.any,
};
