import React, { Component, PropTypes } from 'react';
import Textarea from 'react-textarea-autosize';

import styles, {
  form,
  title,
  body,
  tagArea,
  wrapper,
  submition,
  noteActions,
  unfolded } from './CreationForm.scss';

import NoteActions from '../NoteActions';
import TagArea from '../TagArea';
import Button from '../basic/Button';
import AttachedImages from '../basic/AttachedImages';

export default class CreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: form,
      titleText: '',
      bodyText: '',
      color: props.color || 'white',
      previews: [],
      imageFiles: [],
      tags: props.tag ? [props.tag] : [],
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
    this.create = this.create.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.setColor = this.setColor.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleDeleteTag = this.handleDeleteTag.bind(this);
    this.deletePreview = this.deletePreview.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClickOut);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ tags: nextProps.tag ? [nextProps.tag] : [] });
    if (nextProps.color) { this.setState({ color: nextProps.color }); }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClickOut);
  }

  setColor(value) {
    this.setState({ color: value });
  }

  handleImage({ file, preview }) {
    const { imageFiles, previews } = this.state;
   
    this.setState({
      imageFiles: [...imageFiles, file],
      previews: [...previews, { url: preview, _id: Math.random() }],
    });
  }

  deletePreview(preview) {
    const { previews } = this.state;
    const { imageFiles } = this.state;
    const i = previews.indexOf(preview);

    this.setState({
      imageFiles: imageFiles.filter((im, j) => j !== i),
      previews: previews.filter(p => p !== preview),
    });
  }


  create(e) {
    e.preventDefault();

    const { titleText, bodyText, color, tags, imageFiles } = this.state;

    const formData = new FormData();
    formData.append('title', titleText.trim());
    formData.append('body', bodyText.trim());
    formData.append('color', color);
    formData.append('tags', JSON.stringify(tags));

    if (imageFiles.length > 0) {
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append('note-image', imageFiles[i], imageFiles[i].name);
      }
    }

    // if (imageFiles.length > 0) {
    //   formData.append('note-image', imageFiles, imageFiles.name);
    // }

    this.props.onSubmit(formData);

    this.setState({
      titleText: '',
      bodyText: '',
      className: form,
      color: 'white',
      previews: [],
      imageFiles: [],
      tags: [],
    });
  }

  handleAddTag(newTag) {
    const { tags } = this.state;

    this.setState({ tags: [...tags, newTag] });
  }

  handleDeleteTag(tag) {
    const { tags } = this.state;

    this.setState({ tags: tags.filter(t => t !== tag) });
  }

  handleBodyChange(e) {
    this.setState({ bodyText: e.target.value });
  }

  handleTitleChange(e) {
    this.setState({ titleText: e.target.value });
  }

  handleFocus() {
    this.setState({ className: unfolded });
  }

  handleClickOut(e) {
    if (e.target.parentNode !== this.theForm) this.setState({ className: form });
  }

  render() {
    const { titlePlaceholder, bodyPlaceholder, tagsSuggestions } = this.props;
    const { bodyText, titleText, className, color, previews } = this.state;
    return (
      <div
        className={wrapper}
        onClick={this.handleFocus}
        ref={c => this.theForm = c}
      >
        <form
          encType="multipart/form-data"
          className={`${className} ${styles[color]}`}
          onSubmit={this.create}
        >
          {previews && <AttachedImages
            expandImage={this.props.expandImage}
            onDelete={this.deletePreview}
            images={previews}
          />}

          <Textarea
            className={title}
            onChange={this.handleTitleChange}
            value={titleText}
            placeholder={titlePlaceholder}
          />

          <Textarea
            className={body}
            onChange={this.handleBodyChange}
            value={bodyText}
            placeholder={bodyPlaceholder}
          />

          <TagArea
            className={tagArea}
            onAddTag={this.handleAddTag}
            onDeleteTag={this.handleDeleteTag}
            suggestions={tagsSuggestions(this.state.tags)}
            tags={this.state.tags}
          />

          <div className={submition} >
            <NoteActions
              color={color}
              className={noteActions}
              onSetColor={this.setColor}
              onChange={this.handleImage}
              id="CHECK"
            >
              <Button kind="secondary" >Done</Button>
            </NoteActions>
          </div>
        </form>
      </div>
    );
  }
}

CreationForm.defaultProps = {
  color: 'white',
  titlePlaceholder: 'Title',
  bodyPlaceholder: 'Take a note',
};

CreationForm.propTypes = {
  tagsSuggestions: PropTypes.func,
  titlePlaceholder: PropTypes.string,
  bodyPlaceholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  expandImage: PropTypes.func.isRequired,
};
