import React, { Component, PropTypes } from 'react';
import Textarea from 'react-textarea-autosize';
import Icon from '../basic/Icon';
import styles, {
  form,
  title,
  body,
  tagArea,
  button,
  wrapper,
  iconBack,
  submition,
  noteActions } from './ExpandedCreationForm.scss';

import NoteActions from '../NoteActions';
import TagArea from '../TagArea';
import Button from '../basic/Button';
import AttachedImages from '../basic/AttachedImages';

export default class ExpandedCreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: '',
      bodyText: '',
      color: props.color || 'white',
      previews: [],
      imageFiles: [],
      tags: props.tag ? [props.tag] : [],
    };
    this.create = this.create.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.setColor = this.setColor.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleDeleteTag = this.handleDeleteTag.bind(this);
    this.deletePreview = this.deletePreview.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ tags: nextProps.tag ? [nextProps.tag] : [] });
    if (nextProps.color) { this.setState({ color: nextProps.color }); }
  }

  setColor(value) {
    this.setState({ color: value });
  }

  handleImage({ file, preview }) {
    const { imageFiles, previews } = this.state;

    this.setState({
      imageFiles: [...imageFiles, file],
      previews: [...previews, { url: preview, id: Math.random() }],
    });
  }

  deletePreview(preview) {
    const { previews } = this.state;
    const { imageFiles } = this.state;
    const i = previews.map(p => p.id).indexOf(preview);

    this.setState({
      imageFiles: imageFiles.filter((im, j) => j !== i),
      previews: previews.filter(p => p.id !== preview),
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

  render() {
    const { titlePlaceholder, bodyPlaceholder, tagsSuggestions, closeModal } = this.props;
    const { bodyText, titleText, color, previews } = this.state;

    return (
      <div className={`${wrapper} ${styles[color]}`} >
        <Icon name="arrow_back" className={iconBack} onClick={closeModal} />
        <form
          encType="multipart/form-data"
          className={form}
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

          <div className={`${submition} ${styles[color]}`} >
            <TagArea
              className={tagArea}
              onAddTag={this.handleAddTag}
              onDeleteTag={this.handleDeleteTag}
              suggestions={tagsSuggestions(this.state.tags)}
              tags={this.state.tags}
            />
            <NoteActions
              color={color}
              className={noteActions}
              onSetColor={this.setColor}
              onChange={this.handleImage}
              id="CHECK"
            />
            <Button className={button} kind="secondary" >Done</Button>
          </div>
        </form>
      </div>
    );
  }
}

ExpandedCreationForm.defaultProps = {
  color: 'white',
  titlePlaceholder: 'Title',
  bodyPlaceholder: 'Take a note',
};

ExpandedCreationForm.propTypes = {
  tagsSuggestions: PropTypes.func,
  titlePlaceholder: PropTypes.string,
  bodyPlaceholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  expandImage: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
