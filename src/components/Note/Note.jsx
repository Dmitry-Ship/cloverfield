import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles, {
  image,
  input,
  titleInput,
  linkWrapper,
  content,
  tagLink,
  previewWrapper,
  actionsWrapper,
  actions,
  icon } from './Note.scss';
import NoteActions from '../NoteActions';
import Icon from '../basic/Icon';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
    };
    this.handleImage = this.handleImage.bind(this);
  }

  handleImage({ file }) {
    const formData = new FormData();

    formData.append('note-image', file, file.filename);

    return this.props.onAddImage(formData);
  }

  render() {
    const {
      note,
      onDelete,
      onSetColor } = this.props;
    return (
      <div className={`${styles.note} ${styles[note.color]}`}>

        <div className={content}>
          <Link to={{ pathname: `/notes/${note._id}`, state: { modal: true } }} className={linkWrapper} >

            {note.images &&
            <div className={previewWrapper} >
              {note.images.map((im, i) => (
                <div key={im.id} ><img className={image} src={im.url}  alt="" /></div>
                ))}
            </div>}
            <span className={titleInput} >{note.title}</span>
            <span className={input} >{note.body}</span>
          </Link>

          {note.tags && note.tags.map((t, i) =>
            <Link key={i} className={tagLink} to={`/tags/${t}`}>
              {t}
            </Link>)}
        </div>

        <div className={actionsWrapper} >
          <NoteActions
            className={actions}
            color={note.color}
            onSetColor={onSetColor}
            onChange={this.handleImage}
            id={note._id}
          >

            <Icon
              className={icon}
              name="delete"
              onClick={onDelete}
            />
          </NoteActions>

        </div>
      </div>
    );
  }
}

Note.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onSetColor: PropTypes.func.isRequired,
  onAddImage: PropTypes.func.isRequired,
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    color: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
