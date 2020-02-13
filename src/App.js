import React from 'react';
import Animated from './pages/home/home'
import './App.css';
const divStyle = {
  position: 'absolute',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  backgroundColor: '#FF4B4B'
};

function App() {
  return (
    <div style={divStyle}>
      <Animated />
    </div>
  );
}

export default App;
