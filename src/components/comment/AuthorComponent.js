import React, { Component } from 'react';
import './AuthorComponent.css';

export default class AuthorComponent extends Component {
  render() {
    const {src} = this.props;
    const defualtSrc = require("../../pictures/punk.png");
    const imgSrc = src ? src : defualtSrc;
    return (
      <img src={imgSrc}
        alt="Smiley face"
        height="32"
        width="32"
      />
    );
  }
}
