import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

import styles from './ExpandedNote.scss';
import NoteActions from 'components/NoteActions';
import Icon from 'components/basic/Icon';
import TagArea from 'components/TagArea';
import AttachedImages from 'components/basic/AttachedImages';

export default class ExpandedNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
      hasChanged: false,
    };
  }

  handleImage = ({ file }) => {
    const formData = new FormData();

    formData.append('note-image', file, file.filename);

    return this.props.onAddImage(formData);
  }

  handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length >= 100) return;

    this.setState({ title: value, hasChanged: true });
  }

  handleBodyChange = (e) => {
    const value = e.target.value;
    if (value.length >= 5000) return;

    this.setState({ body: value, hasChanged: true });
  }

  handleTitleBlur = () => {
    const value = this.state.title.trim();
    if (!this.state.hasChanged) { return; }
    this.props.onUpdateTitle(value);
    this.setState({ title: value, hasChanged: false });
  }

  handleBodyBlur = () => {
    const value = this.state.body.trim();
    if (!this.state.hasChanged) { return; }
    this.props.onUpdateBody(value);
    this.setState({ body: value, hasChanged: false });
  }

  handleFocus = (e) => {
    const fieldName = e.target.name;

    this.setState({
      [fieldName]: this.props.note[fieldName],
    });
  }

  render() {
    let wrapperRef;
    const {
      note,
      onDelete,
      onAddTag,
      onDeleteTag,
      expandImage,
      onDeleteImage,
      history,
      onSetColor } = this.props;
    const { title, body } = this.state;
    const closeNote = (e) => {
      if (e.target === wrapperRef) {
        history.goBack();
      }
    };


    return (
      <div className={styles.wrapper} onClick={closeNote} ref={node => (wrapperRef = node)} >

        <div className={`${styles.note} ${styles[note.color]}`}>
          <Icon name="arrow_back" className={styles.iconBack} onClick={() => history.goBack()} />

          <div className={styles.content}>
            <AttachedImages
              expandImage={expandImage}
              onDelete={onDeleteImage}
              images={note.images}
            />

            <Textarea
              value={title}
              placeholder="Title"
              name="title"
              className={styles.titleInput}
              onChange={this.handleTitleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleTitleBlur}
            />

            <Textarea
              value={body}
              name="body"
              placeholder="Content"
              className={styles.input}
              onChange={this.handleBodyChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBodyBlur}
            />

          </div>

          <div className={`${styles.actions} ${styles[note.color]}`} >

            <TagArea
              className={styles.tagArea}
              onDeleteTag={onDeleteTag}
              tags={note.tags}
              suggestions={this.props.tagsSuggestions}
              onAddTag={onAddTag}
            />
            <NoteActions
              color={note.color}
              onSetColor={onSetColor}
              onChange={this.handleImage}
              id={note._id}
            >

              <Icon
                className={styles.icon}
                name="delete"
                onClick={() => { onDelete(); history.goBack(); }}
              />
            </NoteActions>
          </div>
        </div>
      </div>
    );
  }
}

ExpandedNote.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onSetColor: PropTypes.func.isRequired,
  onUpdateTitle: PropTypes.func.isRequired,
  onUpdateBody: PropTypes.func.isRequired,
  onAddTag: PropTypes.func.isRequired,
  onDeleteTag: PropTypes.func.isRequired,
  onDeleteImage: PropTypes.func.isRequired,
  onAddImage: PropTypes.func.isRequired,
  expandImage: PropTypes.func.isRequired,
  // note: PropTypes.shape({
  //   _id: PropTypes.string.isRequired,
  //   title: PropTypes.string,
  //   body: PropTypes.string,
  //   color: PropTypes.string,
  //   tags: PropTypes.arrayOf(PropTypes.string),
  //   images: PropTypes.arrayOf(PropTypes.string),
  // }).isRequired,
};
