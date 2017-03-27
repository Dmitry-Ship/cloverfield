import React, { PropTypes, Component } from 'react';
import Textarea from 'react-textarea-autosize';

import styles, {
  image,
  input,
  titleInput,
  content,
  actions,
  wrapper,
  iconBack,
  icon } from './ExpandedNote.scss';
import { Link } from 'react-router-dom';
import NoteActions from '../NoteActions';
import Icon from '../basic/Icon';
import TagArea from '../TagArea';
import AttachedImages from '../basic/AttachedImages';

export default class ExpandedNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
    };
    this.handleImage = this.handleImage.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleBlur = this.handleTitleBlur.bind(this);
    this.handleBodyBlur = this.handleBodyBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleImage({ file }) {
    const formData = new FormData();

    formData.append('note-image', file, file.filename);

    return this.props.onAddImage(formData);
  }

  handleTitleChange(e) {
    const value = e.target.value;
    if (value.length >= 50) return;

    this.setState({ title: value });
  }

  handleBodyChange(e) {
    const value = e.target.value;
    if (value.length >= 500) return;

    this.setState({ body: value });
  }

  handleTitleBlur() {
    const value = this.state.title.trim();

    this.props.onUpdateTitle(value);
    this.setState({ title: value });
  }

  handleBodyBlur() {
    const value = this.state.body.trim();
    this.props.onUpdateBody(value);
    this.setState({ body: value });
  }

  handleFocus(e) {
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
        history.push('/');
      }
    }


    return (
      <div className={wrapper} onClick={closeNote} ref={node => (wrapperRef = node)} >

        <div className={`${styles.note} ${styles[note.color]}`}>
          <Icon name="arrow_back" className={iconBack} onClick={() => history.push('/')} />

          <div className={content}>
            <AttachedImages
              expandImage={expandImage}
              onDelete={onDeleteImage}
              images={note.images}
              className={image}
            />

            <Textarea
              value={title}
              placeholder="Title"
              name="title"
              className={titleInput}
              onChange={this.handleTitleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleTitleBlur}
            />

            <Textarea
              value={body}
              name="body"
              placeholder="Content"
              className={input}
              onChange={this.handleBodyChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBodyBlur}
            />

            {/*<TagArea
              onDeleteTag={onDeleteTag}
              tags={note.tags}
              suggestions={this.props.tagsSuggestions}
              onAddTag={onAddTag}
            />*/}
          </div>

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

// Note.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   onSetColor: PropTypes.func.isRequired,
//   onUpdateTitle: PropTypes.func.isRequired,
//   onUpdateBody: PropTypes.func.isRequired,
//   onAddTag: PropTypes.func.isRequired,
//   onDeleteTag: PropTypes.func.isRequired,
//   onDeleteImage: PropTypes.func.isRequired,
//   onAddImage: PropTypes.func.isRequired,
//   expandImage: PropTypes.func.isRequired,
//   note: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string,
//     body: PropTypes.string,
//     color: PropTypes.string,
//     tags: PropTypes.arrayOf(PropTypes.string),
//     images: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };