import React, { PropTypes, Component } from 'react';
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
import TagArea from '../TagArea';
import AttachedImages from '../basic/AttachedImages';

export default class Note extends Component {
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
    const {
      note,
      onDelete,
      onAddTag,
      onDeleteTag,
      expandImage,
      onDeleteImage,
      onSetColor } = this.props;
    const { title, body } = this.state;

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
  onUpdateTitle: PropTypes.func.isRequired,
  onUpdateBody: PropTypes.func.isRequired,
  onAddTag: PropTypes.func.isRequired,
  onDeleteTag: PropTypes.func.isRequired,
  onDeleteImage: PropTypes.func.isRequired,
  onAddImage: PropTypes.func.isRequired,
  expandImage: PropTypes.func.isRequired,
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    color: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
