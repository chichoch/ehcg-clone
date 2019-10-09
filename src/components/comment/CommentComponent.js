import React, { Component } from 'react';
import './CommentComponent.css';
import AuthorComponent from './AuthorComponent';
import { CSSTransition } from 'react-transition-group'


export default class CommentComponent extends Component {

  render() {
    const {comment} = this.props;
    const author = comment.author;
    const content = comment.content;
    return (
      <CSSTransition
        timeout={500}>
        <div className="Comment" key={1}>
          <div className="CommentAuthor">
            <AuthorComponent src={author.img}/>
          </div>
          <div className="CommentContent">
            <b>
              {author + ' '}
            </b>
            {content}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
