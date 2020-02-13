import React from 'react';
import Animated from './pages/home/home';
import './App.scss';
const divStyle = {
  body: {
    width: '100%',
    height: '100vh',
    margin: 0,
    padding: 0,
    background: 'rgb(9,76,114)',
    background: '-webkit-radial-gradient(bottom, ellipse cover,  rgb(9,76,114) 0%,rgb(1,41,63) 100%)',
    background: '-webkit-radial-gradient(ellipse at bottom, rgb(9,76,114) 0%, rgb(1,41,63) 100%)',
    background: '-webkit-radial-gradient(bottom, ellipse, rgb(9,76,114) 0%, rgb(1,41,63) 100%)',
    background: 'radial-gradient(ellipse at bottom,  rgb(9,76,114) 0%,rgb(1,41,63) 100%)',
    filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#094c72', endColorstr='#01293f',GradientType=1 )`
  },

};

function App() {
  return (
    <div style={divStyle.body}>
      <div class="stars small"></div>
      <div class="stars medium"></div>
      <div class="stars large"></div>
      <Animated />
    </div>
  );
}

export default App;
