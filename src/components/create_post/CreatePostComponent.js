import React, { Component } from "react";
import "./CreatePostComponent.css";
import TextareaAutosize from "react-autosize-textarea/lib";

export default class CreatePostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.post.header,
      content: this.props.post.content,
      footer: this.props.post.footer,
      author: this.props.author,
      error: "",
    };

    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleFooterChange = this.handleFooterChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHeaderChange(event) {
    this.setState({ header: event.target.value });
  }

  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }

  handleFooterChange(event) {
    this.setState({ footer: event.target.value });
  }

  handleSubmit(event) {
    // TODO Don't post if no data!
    const { header, content, footer } = this.state;
    if (!header || !content || !footer) {
      event.preventDefault();
      this.setState({
        ...this.state,
        error: "Alla fält måste vara ifyllda",
      });
    } else {
      this.props.onSubmit({
        post: {
          header: this.state.header,
          content: this.state.content,
          footer: this.state.footer,
          author: this.state.author.name,
          comments: {},
        },
      });
      event.preventDefault();
      this.setState({
        header: "",
        content: "",
        footer: "",
        error: "",
      });
    }
  }

  render() {
    const { error } = this.state;
    return (
      <form className="CreatePost" onSubmit={this.handleSubmit}>
        <div className="CreatePostHeader">
          Hej Folkets{" "}
          <input
            type="text"
            value={this.state.header}
            onChange={this.handleHeaderChange}
          />
          -grupp!
        </div>
        <TextareaAutosize
          className="TextareaAutosize"
          rows={3}
          onChange={this.handleContentChange}
          value={this.state.content}
          placeholder=""
        />
        <div className="CreatePostFooter">
          <input
            type="text"
            value={this.state.footer}
            onChange={this.handleFooterChange}
          />{" "}
          +/-?
        </div>
        {error && <div className="error">{error}</div>}
        <div className="CreatePostSubmit">
          <button type="submit">
            <h3>Publicera</h3>
          </button>
        </div>
      </form>
    );
  }
}
