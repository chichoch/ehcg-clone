import React, { Component } from 'react';
import './PostHeaderComponent.css';
import AuthorComponent from '../comment/AuthorComponent';

export default class PostHeaderComponent extends Component {
  render() {
    return (
      <div className="PostHeaderComponent">
        <AuthorComponent />
        <b className="PostHeaderText">
          Du 👉 Folkets hardcore-grupp
        </b>
      </div>
    );
  }
}
