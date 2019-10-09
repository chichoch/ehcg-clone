import React, { Component } from 'react';
import './PostHeaderComponent.css';
import AuthorComponent from '../comment/AuthorComponent';

export default class PostHeaderComponent extends Component {
  render() {
    const author = this.props.author;
    return (
      <div className="PostHeaderComponent">
        <AuthorComponent />
        <b className="PostHeaderText">
          {author} 👉 Folkets hardcore-grupp
        </b>
      </div>
    );
  }
}
