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

/*     moveBall = () => {
      let start = Date.now();
      let football = document.querySelector(".circle")
  
      let timer = setInterval(function () {
        let interval = Date.now() - start;
  
        football.style.top = interval / 3 + 'px'; // move element down by 3px
  
        if (interval > 1000) clearInterval(timer); // stop animation
  
      }, 1000 / 60);
    }
 */

 /*     moveBall = () => {
      let start = Date.now();
      let football = document.querySelector(".circle")

      let timer = requestAnimationFrame(function animateBall() {
          let interval = Date.now() - start;

          football.style.top = interval / 3 + 'px'; // move element down by 3px

          if (interval < 1000) requestAnimationFrame(animateBall); // stop animation

      });
  }
 */

  /**
   * Returns a wapper for input function to reverse the bounce effect
  */
  easeOut = (animation) => {
    return (interval) => {
      return 1 - animation(1 - interval);
    }
  }

  /** 
   *  Calculate the Y axis for bounce effect
  */
  bounce = (interval) => {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (interval >= (7 - 4 * a) / 11) { // 4 and 7 cofficient are used to control bounce and smooth y axis fall
        return -Math.pow((11 - 6 * a - 11 * interval) / 4, 2) + Math.pow(b, 2) // Math.pow(b, 2) to keep the same x axis for bounce
        // -Math.pow((11 - 6 * a - 11 * interval) / 4, 2) ajust the y axis up and down
      }
    }
  }

  bounceBall = () => {
    let bounceEaseOut = this.easeOut(this.bounce);
    let start = Date.now();
    let football = document.querySelector(".circle")
    let id = requestAnimationFrame(function animate(time) {
      console.log(time)
      let interval = (Date.now() - start) / 2000;
      if (interval > 1) interval = 1;

      football.style.top = bounceEaseOut(interval) * 300 + 'px' // adjust the y axis
      football.style.left = interval * 300 + 'px' // adjust the x axis

      if (interval < 1) {
        requestAnimationFrame(animate);
      }

    })
  }

  render() {
    return (
      <div className="containter">
        <img className="circle" onClick={this.bounceBall} />
      </div>
    );
  }
}