import React, { Component } from 'react';
import './App.css';
import StateList from '../../Components/StateList';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Track My States</h1>
      </div>
      <StateList />
    </div>
  );
}

export default App;
