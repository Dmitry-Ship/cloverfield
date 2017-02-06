import React, { PropTypes } from 'react';

import styles, {
  image,
  contentEditable,
  content,
  actions,
  actions__icon,
} from './Note.styl';

import Row from '../basic/Row';
import Icon from '../basic/Icon';
import Card from '../basic/Card';
import ColorMenu from '../ColorMenu';
import ContentEditable from '../basic/ContentEditable';
import TagArea from '../TagArea';

const Note = ({
  note,
  onDelete,
  children,
  onAddTag,
  onDeleteTag,
  onSetColor,
  onUpdateTitle,
  onUpdateContent }) => (
    <Card className={`${styles.note} ${styles[note.color]}`}>

      <div className={content}>
        {note.image && <img className={image} src={`/${note.image}`} alt="note-mage" />}
        <ContentEditable
          style={{ position: 'relative' }}
          text={note.title}
          className={contentEditable}
          onBlur={val => onUpdateTitle(val, note._id)}
          maxLength={24}
        />
        <ContentEditable
          text={note.content}
          className={contentEditable}
          onBlur={val => onUpdateContent(val, note._id)}
          maxLength={1000}
        />
        <TagArea
          onDeleteTag={tag => onDeleteTag(tag, note._id)}
          tags={note.tags}
          onAddTag={tag => onAddTag(tag, note._id)}
        />
        {children}
      </div>
      <Row align="space-between" className={actions}>
        <ColorMenu
          className={actions__icon}
          color={note.color}
          onSetColor={col => onSetColor(col, note._id)}
        />
        <Icon
          className={actions__icon}
          name="delete"
          onClick={() => onDelete(note._id)}
        />
        <Icon
          className={actions__icon} name="more_vert"
        />
      </Row>
    </Card>
);

export default Note;

Note.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onSetColor: PropTypes.func.isRequired,
  onUpdateTitle: PropTypes.func.isRequired,
  onUpdateContent: PropTypes.func.isRequired,
  onAddTag: PropTypes.func.isRequired,
  onDeleteTag: PropTypes.func.isRequired,
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    color: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  children: PropTypes.element,
};
