import React from 'react';
import Animated from './pages/home/home'
import './App.css';
const divStyle = {
  width: '96%',
  height: '100%',
  margin: '20px',
  padding: '10px'
};

function App() {
  return (
    <div style={divStyle}>
      <Animated />
    </div>
  );
}

export default App;
