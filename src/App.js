import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Football Animation'
    };
  }

/*   moveBall = () => {
    let start = Date.now();
    let football = document.querySelector(".circle")

    let timer = setInterval(function () {
      let interval = Date.now() - start;

      football.style.top = interval / 3 + 'px'; // move element down by 3px

      if (interval > 1000) clearInterval(timer); // stop animation

    }, 1000 / 60);
  } */

  moveBall = () => {
    let start = Date.now();
    let football = document.querySelector(".circle")

    let timer = requestAnimationFrame(function animateBall() {
        let interval = Date.now() - start;

        football.style.top = interval / 3 + 'px'; // move element down by 3px

        if (interval < 1000) requestAnimationFrame(animateBall); // stop animation

    });
}

  render() {
    return (
      <div className="containter">
        <img className="circle" onClick={this.moveBall} />
      </div>
    );
  }
}