import React, { PropTypes, Component } from 'react';

import styles, {
  image,
  contentEditable,
  body,
  actions,
  actions__icon,
} from './Note.styl';

import Row from '../basic/Row';
import Icon from '../basic/Icon';
import Card from '../basic/Card';
import ColorMenu from '../ColorMenu';
import ContentEditable from '../basic/ContentEditable';
import TagArea from '../TagArea';
import AttachedImages from '../basic/AttachedImages';
import NoteFileUploader from '../NoteFileUploader';

const Note = ({
  note,
  onDelete,
  children,
  onAddTag,
  onDeleteTag,
  onDeleteImage,
  onAddImage,
  onSetColor,
  onUpdateTitle,
  onUpdateBody }) => {
  const handleImage = (file) => {
    const formData = new FormData();

    formData.append('note-image', file, file.filename);

    return onAddImage(formData);
  };

  return (
    <Card className={`${styles.note} ${styles[note.color]}`}>

      <div className={body}>
        {note.images.length > 0 && <AttachedImages
          onDelete={onDeleteImage} images={note.images} className={image}
        />}
        <ContentEditable
          text={note.title}
          className={contentEditable}
          onBlur={onUpdateTitle}
          maxLength={24}
        />
        <ContentEditable
          text={note.body}
          className={contentEditable}
          onBlur={onUpdateBody}
          maxLength={1000}
        />
        <TagArea
          onDeleteTag={onDeleteTag}
          tags={note.tags}
          onAddTag={onAddTag}
        />
        {children}
      </div>
      <Row align="space-between" className={actions}>
        <ColorMenu
          className={actions__icon}
          color={note.color}
          onSetColor={onSetColor}
        />

        <NoteFileUploader id={note._id} className={actions__icon} onChange={handleImage} />

        <Icon
          className={actions__icon}
          name="delete"
          onClick={onDelete}
        />
        <Icon
          className={actions__icon} name="more_vert"
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
  onUpdateBody: PropTypes.func.isRequired,
  onAddTag: PropTypes.func.isRequired,
  onDeleteTag: PropTypes.func.isRequired,
  onDeleteImage: PropTypes.func.isRequired,
  onAddImage: PropTypes.func.isRequired,
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    color: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  children: PropTypes.element,
};
