import React, { Component } from "react";
import "./PostComponent.css";
import PostHeaderComponent from "./PostHeaderComponent";
import CommentComponent from "../comment/CommentComponent";
import { CSSTransition } from "react-transition-group";
import Comment from "../../model/Comment";
import TextareaAutosize from "react-autosize-textarea/lib";
import { postRef } from "../../firebase";

class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.post.header,
      content: this.props.post.content,
      footer: this.props.post.footer,
      commentIndex: 0,
      intervalId: 0,
      newComment: "",
      error: "",
    };
  }

  handleCommentChange = (event) => {
    this.setState({ newComment: event.target.value, error: "" });
  };

  handleSubmit = () => {
    const { comment } = this.state;

    if (!comment) {
      this.setState({ ...this.state, error: "Öh, du måste skriva nått" });
    } else {
      const author = this.props.author;
      const newComment = new Comment(author.name, comment);
      postRef
        .child(this.props.post.id)
        .child("comments")
        .push()
        .set(newComment);
      this.setState({ newComment: "", error: "" });
    }
  };

  render() {
    const { post } = this.props;
    const { newComment, error } = this.state;

    const comments = post.comments ? Object.values(post.comments) : [];

    return (
      <CSSTransition timeout={500}>
        <div className="Post">
          <PostHeaderComponent author={this.props.post.author} />
          <div className="PostContent">
            Hej Folkets {post.header}-grupp!
            <br />
            <br />
            {post.content}
            <br />
            <br />
            {post.footer} +/-?
          </div>
          <hr />
          <div className="Comments">
            {comments.map((obj, i) => (
              <CommentComponent comment={obj} key={i} />
            ))}
          </div>
          <div className="AddComment">
            <TextareaAutosize
              className="Textarea"
              type="text"
              value={newComment}
              onChange={this.handleCommentChange}
              placeholder="Kommentera..."
              rows={1}
            />
            {error && <div className="error">{error}</div>}
            <button type="submit" onClick={this.handleSubmit}>
              <h4>Skicka</h4>
            </button>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default PostComponent;
