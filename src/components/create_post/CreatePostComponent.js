import React, { Component } from 'react';
import './CreatePostComponent.css';
import TextareaAutosize from 'react-autosize-textarea/lib';

export default class CreatePostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.post.header,
      content: this.props.post.content,
      footer: this.props.post.footer
    }

    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleFooterChange = this.handleFooterChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHeaderChange(event) {
    this.setState({header: event.target.value});
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  handleFooterChange(event) {
    this.setState({footer: event.target.value});
  }

  handleSubmit(event) {
      this.props.onSubmit({
        post: {
          header: this.state.header,
          content: this.state.content,
          footer: this.state.footer
        }
      });
      event.preventDefault();
      this.setState({
        header: '',
        content: '',
        footer: ''
      });
  }

  render() {
    return (
      <form className="CreatePost" onSubmit={this.handleSubmit}>
        <div className="CreatePostHeader">
        Hej Folkets {' '}
          <input
            type="text"
            value={this.state.header}
            onChange={this.handleHeaderChange} />
        -grupp!
        </div>
        <TextareaAutosize
          className="TextareaAutosize"
          rows={3}
          onChange={this.handleContentChange}
          value={this.state.content}
          placeholder=''
        />
        <div className="CreatePostFooter">
          <input
            type="text"
            value={this.state.footer}
            onChange={this.handleFooterChange} />
          {' '} +/-?
        </div>
        <div className="CreatePostSubmit">
          <button
            type="submit">
            <h3>Publicera</h3>
          </button>
        </div>
      </form>
    );
  }
}
