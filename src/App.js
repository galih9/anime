import React from 'react';
import Animated from './pages/home'
import './App.css';
const divStyle = {
  color: 'blue',
  width: '200px',
  height: '200px',
  margin: '200px'
};

function App() {
  return (
    <div style={divStyle}>
      <Animated />
    </div>
  );
}

export default App;
