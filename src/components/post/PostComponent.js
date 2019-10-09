import React, { Component } from 'react';
import './PostComponent.css';
import PostHeaderComponent from './PostHeaderComponent';
import CommentComponent from '../comment/CommentComponent';
import CommentGenerator from '../../model/CommentGenerator';
import { CSSTransition } from 'react-transition-group'

const getRandomTime = () => {
  return Math.floor(Math.random() * 5000) + 1000;
};

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

  commentGenerator = new CommentGenerator();

  componentDidMount() {
    setTimeout(() => {
      this.generateRecursiveTimeoutWithRandomInterval();
    }, getRandomTime());
  }

  addComments = () => {
    var comments = this.state.comments;
    var commentIndex = this.state.commentIndex + 1;
    comments.push(this.commentGenerator.getRandomComment());
    this.setState({
      comments: comments,
      commentIndex: commentIndex,
    });
  }

  generateRecursiveTimeoutWithRandomInterval = () => {
    this.addComments();
    const interval = getRandomTime();
    setTimeout(() => {
      this.generateRecursiveTimeoutWithRandomInterval();
    }, interval);
  }

  render() {
    const {post} = this.props;
    const {comments} = this.state;
    return (
      <CSSTransition
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
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
