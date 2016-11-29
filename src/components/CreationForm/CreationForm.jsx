import React, { Component, PropTypes } from 'react';
import Textarea from 'react-textarea-autosize';

import styles from './CreationForm.css';

import ColorMenu from '../ColorMenu';
import Form from '../basic/Form';
import Button from '../basic/Button';
import Row from '../basic/Row';
import Icon from '../basic/Icon';

export default class CreationForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      className: '',
      title: '',
      content: '',
      color: 'white'
    }
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
    this.create = this.create.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.setColor = this.setColor.bind(this);

  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClickOut);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClickOut);
  }

  handleFocus(){
    this.setState({ className: styles.unfolded })
  }

  handleClickOut(e) {
    if (e.target.parentNode !== this.theForm) this.setState({ className: '' })
  }

  handleTitleChange(e) {
    const title = e.target.value;

    if (title.length > 100) return;

    this.setState({ title: title });
  }

  handleContentChange(e) {
    const content = e.target.value;

    if (content.length > this.props.maxLength) return;

    const validatedContent = this.props.validation ?
                             this.props.validation(content) :
                             content;

    this.setState({ content: validatedContent });
  }

  create(e) {
    e.preventDefault();

    const title = this.state.title,
          content = this.state.content,
          color = this.state.color;

    this.props.onCreateItem(title, content, color)

    this.setState({
      title: '',
      content: '',
      className: '',
      color: 'white'
    })
  }

  setColor(value) {
    this.setState({ color: value})
  }

  render() {
    const {
      titlePlaceholder,
      contentPlaceholder,
      maxLength } = this.props;
    const { content, title, className, color } = this.state;

    return (
      <div
        className={styles.wrapper} onClick={this.handleFocus}
        ref={c => this.theForm = c}>
        <Form
          className={`${styles.form} ${className} ${color}`}
          onSubmit={this.create}>
          <Textarea
            className={`${styles.field} ${styles.title}`}
            onChange={this.handleTitleChange}
            value={title}
            placeholder={titlePlaceholder} />

          <Textarea
            className={`${styles.field} ${styles.content}`}
            onChange={this.handleContentChange}
            value={content}
            maxLength={maxLength}
            placeholder={contentPlaceholder} />

          <div className={styles.submition}>
            <Row className={styles.attachments} auto={false} >
              <Icon className={styles.attachments__icon} name="image"/>

              <ColorMenu
                color={color}
                onSetColor={this.setColor}
                className={styles.attachments__icon}
              />

              <Icon className={styles.attachments__icon} name="more_vert"/>
            </Row>
            <Button
              kind="secondary"
              type="submit"
              label="Done"
            />
          </div>
        </Form>
      </div>
    )
  }
}

CreationForm.defaultProps = {
  color: 'white'
}

CreationForm.propTypes = {
  titlePlaceholder: PropTypes.string.isRequired,
  contentPlaceholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  onCreateItem: PropTypes.func.isRequired,
  validation: PropTypes.func,
}
