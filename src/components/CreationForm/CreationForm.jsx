import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

import styles from './CreationForm.scss';

import NoteActions from '../NoteActions';
import TagArea from '../TagArea';
import Button from '../basic/Button';
import AttachedImages from '../basic/AttachedImages';
import Icon from '../basic/Icon';

export default class CreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: styles.form,
      titleText: '',
      bodyText: '',
      color: props.color || 'white',
      previews: [],
      imageFiles: [],
      tags: props.tag ? [props.tag] : [],
    };
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

  setColor = (value) => {
    this.setState({ color: value });
  }

  handleImage = ({ file, preview }) => {
    const { imageFiles, previews } = this.state;

    this.setState({
      imageFiles: [...imageFiles, file],
      previews: [...previews, { url: preview, id: Math.random() }],
    });
  }

  deletePreview = (preview) => {
    const { previews } = this.state;
    const { imageFiles } = this.state;
    const i = previews.map(p => p.id).indexOf(preview);

    this.setState({
      imageFiles: imageFiles.filter((im, j) => j !== i),
      previews: previews.filter(p => p.id !== preview),
    });
  }


  create = (e) => {
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
      className: styles.form,
      color: 'white',
      previews: [],
      imageFiles: [],
      tags: [],
    });
  }

  handleAddTag = (newTag) => {
    const { tags } = this.state;

    this.setState({ tags: [...tags, newTag] });
  }

  handleDeleteTag = (tag) => {
    const { tags } = this.state;

    this.setState = ({ tags: tags.filter(t => t !== tag) });
  }

  handleBodyChange = (e) => {
    this.setState({ bodyText: e.target.value });
  }

  handleTitleChange = (e) => {
    this.setState({ titleText: e.target.value });
  }

  handleFocus = () => {
    this.setState({ className: styles.unfolded });
  }

  handleClickOut = (e) => {
    if (e.target.parentNode !== this.theForm) this.setState({ className: styles.form });
  }

  render() {
    const { titlePlaceholder, bodyPlaceholder, tagsSuggestions, expand } = this.props;
    const { bodyText, titleText, className, color, previews } = this.state;
    return (
      <div>
        <div
          className={styles.wrapper}
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
              className={styles.title}
              onChange={this.handleTitleChange}
              value={titleText}
              placeholder={titlePlaceholder}
            />

            <Textarea
              className={styles.body}
              onChange={this.handleBodyChange}
              value={bodyText}
              placeholder={bodyPlaceholder}
            />

            <TagArea
              className={styles.tagArea}
              onAddTag={this.handleAddTag}
              onDeleteTag={this.handleDeleteTag}
              suggestions={tagsSuggestions(this.state.tags)}
              tags={this.state.tags}
            />
            <div className={styles.submition} >
              <NoteActions
                color={color}
                className={styles.noteActions}
                onSetColor={this.setColor}
                onChange={this.handleImage}
                id="CHECK"
              >
                <Button kind="secondary" >Done</Button>
              </NoteActions>
            </div>
          </form>
        </div>
        <div className={styles.expandedFormTrigger} onClick={expand}>
          <Icon name="mode_edit" />
        </div>
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
  tagsSuggestions: PropTypes.func.isRequired,
  titlePlaceholder: PropTypes.string,
  bodyPlaceholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  expandImage: PropTypes.func.isRequired,
  expand: PropTypes.func.isRequired,
  color: PropTypes.string,
  tag: PropTypes.string,
};
