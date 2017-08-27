import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NoteActions from 'components/NoteActions';
import Icon from 'components/basic/Icon';

import styles from './Note.scss';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
    };
  }

  handleImage = ({ file }) => {
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

        <div className={styles.content}>
          <Link to={{ pathname: `/notes/${note._id}`, state: { modal: true } }} className={styles.linkWrapper} >

            {note.images &&
              <div className={styles.previewWrapper} >
                {note.images.map((im, i) => (
                  <div key={im.id} ><img className={styles.image} src={im.url} alt="" /></div>
                ))}
              </div>}
            <span className={styles.titleInput} >{note.title}</span>
            <span className={styles.input} >{note.body}</span>
          </Link>

          {note.tags && note.tags.map((t, i) =>
            <Link key={i} className={styles.tagLink} to={`/tags/${t}`}>
              {t}
            </Link>)}
        </div>

        <div className={styles.actionsWrapper} >
          <NoteActions
            className={styles.actions}
            color={note.color}
            onSetColor={onSetColor}
            onChange={this.handleImage}
            id={note._id}
          >

            <Icon
              className={styles.icon}
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
