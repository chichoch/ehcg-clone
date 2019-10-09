import React, { Component } from 'react';
import './CommentComponent.css';
import AuthorComponent from './AuthorComponent';
import { CSSTransition } from 'react-transition-group'


export default class CommentComponent extends Component {

  render() {
    const {comment} = this.props;
    const author = comment.getAuthor();
    const content = comment.getContent();
    return (
      <CSSTransition
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="Comment" key={1}>
          <div className="CommentAuthor">
            <AuthorComponent src={author.img}/>
          </div>
          <div className="CommentContent">
            <b>
              {author.name + ' '}
            </b>
            {content}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
