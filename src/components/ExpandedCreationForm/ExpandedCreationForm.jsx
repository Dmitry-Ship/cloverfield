import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import Icon from 'components/basic/Icon';
import styles from './ExpandedCreationForm.scss';

import NoteActions from 'components/NoteActions';
import TagArea from 'components/TagArea';
import Button from 'components/basic/Button';
import AttachedImages from 'components/basic/AttachedImages';

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
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ tags: nextProps.tag ? [nextProps.tag] : [] });
    if (nextProps.color) { this.setState({ color: nextProps.color }); }
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

    this.setState({ tags: tags.filter(t => t !== tag) });
  }

  handleBodyChange = (e) => {
    this.setState({ bodyText: e.target.value });
  }

  handleTitleChange = (e) => {
    this.setState({ titleText: e.target.value });
  }

  render() {
    const { titlePlaceholder, bodyPlaceholder, tagsSuggestions, closeForm } = this.props;
    const { bodyText, titleText, color, previews } = this.state;

    return (
      <div className={`${styles.wrapper} ${styles[color]}`} >
        <Icon name="arrow_back" className={styles.iconBack} onClick={closeForm} />
        <form
          encType="multipart/form-data"
          className={styles.form}
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

          <div className={`${styles.submition} ${styles[color]}`} >
            <TagArea
              className={styles.tagArea}
              onAddTag={this.handleAddTag}
              onDeleteTag={this.handleDeleteTag}
              suggestions={tagsSuggestions(this.state.tags)}
              tags={this.state.tags}
            />
            <NoteActions
              color={color}
              className={styles.noteActions}
              onSetColor={this.setColor}
              onChange={this.handleImage}
              id="CHECK"
            />
            <Button className={styles.button} kind="secondary" >Done</Button>
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
  tagsSuggestions: PropTypes.func.isRequired,
  titlePlaceholder: PropTypes.string,
  bodyPlaceholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  expandImage: PropTypes.func.isRequired,
  color: PropTypes.string,
  tag: PropTypes.string,
  closeForm: PropTypes.func.isRequired,
};
