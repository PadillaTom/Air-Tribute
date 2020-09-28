import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

// Main:
function App() {
  // Return:
  return (
    <div className='App'>
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
