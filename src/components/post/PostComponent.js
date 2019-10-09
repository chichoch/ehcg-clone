import React, { Component } from 'react';
import './PostComponent.css';
import PostHeaderComponent from './PostHeaderComponent';
import CommentComponent from '../comment/CommentComponent';
import { CSSTransition } from 'react-transition-group'

class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.post.header,
      content: this.props.post.content,
      footer: this.props.post.footer,
      comments: [],
      commentIndex: 0,
      intervalId: 0,
    }
  }

  render() {
    const {post} = this.props;
    const {comments} = this.state;
    return (
      <CSSTransition
        timeout={500}>
        <div className="Post">
          <PostHeaderComponent />
          <div className="PostContent">
            Hej Folkets {post.header}-grupp!
            <br/><br/>
            {post.content}
            <br/><br/>
            {post.footer} +/-?
          </div>
          <hr/>
          <div className="Comments">
            {comments.map((obj, i) => <CommentComponent comment={obj} key={i}/>)}
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default PostComponent;
