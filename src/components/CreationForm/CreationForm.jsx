import React, { Component, PropTypes } from 'react';
import Textarea from 'react-textarea-autosize';

import styles, {
  uploader,
  form,
  title,
  button,
  content,
  tagArea,
  wrapper,
  submition,
  attachments,
  attachments__icon,
  unfolded } from './CreationForm.styl';

import ColorMenu from '../ColorMenu';
import TagArea from '../TagArea';
import Form from '../basic/Form';
import Row from '../basic/Row';
import Icon from '../basic/Icon';
import FileUploader from '../basic/FileUploader';
import ContentEditable from '../basic/ContentEditable';

export default class CreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: form,
      titleText: '',
      contentText: '',
      color: 'white',
      image: {},
      tags: [],
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
    this.create = this.create.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.setColor = this.setColor.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleDeleteTag = this.handleDeleteTag.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClickOut);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClickOut);
  }


  setColor(value) {
    this.setState({ color: value });
  }

  handleImage(e) {
    const newImage = e.target.files[0];

    this.setState({ image: newImage });
  }

  create(e) {
    e.preventDefault();
    const { titleText, contentText, color, tags, image } = this.state;

    const formData = new FormData();
    formData.append('title', titleText);
    formData.append('content', contentText);
    formData.append('color', color);
    formData.append('tags', JSON.stringify(tags));
    formData.append('note-image', image, image.name);
    this.props.onSubmit(formData);

    this.setState({
      titleText: '',
      contentText: '',
      className: form,
      color: 'white',
      image: {},
      tags: [],
    });
  }

  handleAddTag(newTag) {
    const oldTags = this.state.tags;

    oldTags.push(newTag);

    this.setState({ tags: oldTags });
  }

  handleDeleteTag(tag) {
    const oldTags = this.state.tags;
    const i = oldTags.indexOf(tag);

    oldTags.splice(i, 1);

    this.setState({ tags: oldTags });
  }

  handleContentChange(e) {
    const newContent = e.target.value;

    if (content.length > this.props.maxLength) return;

    const validatedContent = this.props.validation ?
                             this.props.validation(content) :
                             newContent;

    this.setState({ contentText: validatedContent });
  }

  handleTitleChange(e) {
    const newTitle = e.target.value;

    if (newTitle.length > 100) return;

    this.setState({ titleText: newTitle });
  }

  handleFocus() {
    this.setState({ className: unfolded });
  }

  handleClickOut(e) {
    if (e.target.parentNode !== this.theForm) this.setState({ className: form });
  }

  render() {
    const {
      titlePlaceholder,
      contentPlaceholder,
      maxLength } = this.props;
    const { contentText, titleText, className, color } = this.state;

    return (
      <div
        className={wrapper} onClick={this.handleFocus}
        ref={c => this.theForm = c}
      >
        <Form
          enctype="multipart/form-data"
          buttonClass={button}
          className={`${className} ${styles[color]}`}
          onSubmit={this.create}
        >
          <Textarea
            className={title}
            onChange={this.handleTitleChange}
            value={titleText}
            placeholder={titlePlaceholder}
          />

          <Textarea
            className={content}
            onChange={this.handleContentChange}
            value={contentText}
            maxLength={maxLength}
            placeholder={contentPlaceholder}
          />

          <TagArea
            className={tagArea}
            onAddTag={this.handleAddTag}
            onDeleteTag={this.handleDeleteTag}
            tags={this.state.tags}
          />

          <div className={submition} >
            <Row className={attachments} auto={false} >
              <label htmlFor="CHECK">
                <Icon className={attachments__icon} name="image" />
              </label>

              <FileUploader
                id="CHECK"
                className={uploader}
                fileType="image/*"
                onChange={this.handleImage}
              />

              <ColorMenu
                color={color}
                onSetColor={this.setColor}
                className={attachments__icon}
              />

              <Icon className={attachments__icon} name="more_vert" />
            </Row>
          </div>
        </Form>

      </div>
    );
  }
}

CreationForm.defaultProps = {
  color: 'white',
  titlePlaceholder: 'Title',
  contentPlaceholder: 'Content',
};

CreationForm.propTypes = {
  titlePlaceholder: PropTypes.string,
  contentPlaceholder: PropTypes.string,
  maxLength: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  validation: PropTypes.func,
};
