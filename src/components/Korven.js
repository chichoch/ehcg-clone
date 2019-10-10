import React, { Component } from 'react';
import './Korven.css';

export default class Korven extends Component {
  render() {
    return (
      <div className="Korv">
        <img src={require('../pictures/korven.png')} className="Korv" height='96' width='96' alt='Korven'/>
      </div>
    );
  }
};
