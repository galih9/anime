import React, { Component } from 'react'
import anime from 'animejs'

class Animated extends Component {
  componentDidMount(){
    anime({
        targets: '.anim',
        translateX: [
            { value: 100, duration: 1200 },
            { value: 0, duration: 800 }
        ],
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 2000,
        loop: true
    });
  }
  render() {
    return(
      <div class="anim">
       Here goes the element you want to animate!
      </div>
    )
  }
}

export default Animated