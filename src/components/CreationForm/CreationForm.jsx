import React, { Component, PropTypes } from 'react';
import Textarea from 'react-textarea-autosize';

import {
  uploader,
  form,
  title,
  content,
  wrapper,
  submition,
  attachments,
  attachments__icon,
  unfolded } from './CreationForm.styl';

import ColorMenu from '../ColorMenu';
import Form from '../basic/Form';
import Button from '../basic/Button';
import Row from '../basic/Row';
import Icon from '../basic/Icon';
import FileUploader from '../basic/FileUploader';

export default class CreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: form,
      titleText: '',
      contentText: '',
      color: 'white',
      image: '',
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
    this.create = this.create.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.setColor = this.setColor.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClickOut);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClickOut);
  }

  handleContentChange(e) {
    const newContent = e.target.value;

    if (content.length > this.props.maxLength) return;

    const validatedContent = this.props.validation ?
                             this.props.validation(content) :
                             newContent;

    this.setState({ contentText: validatedContent });
  }

  create(e) {
    e.preventDefault();

    const data = {
      title: this.state.titleText,
      content: this.state.contentText,
      color: this.state.color,
      image: this.state.image,
    };
    const formData = new FormData();
    formData.append('title', this.state.titleText);
    formData.append('content', this.state.contentText);
    formData.append('color', this.state.color);
    formData.append('avatar', this.state.image, this.state.image.name);
    // this.props.uploadImage(formData)
    this.props.onSubmit(formData);

    this.setState({
      titleText: '',
      contentText: '',
      className: form,
      color: 'white',
      image: '',
    });
  }

  handleImage(e) {
    const newImage = e.target.files[0];

    this.setState({ image: newImage });
  }

  setColor(value) {
    this.setState({ color: value });
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
          className={`${className} ${color}`}
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
            <Button
              kind="secondary"
              type="submit"
              label="Done"
            />
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
