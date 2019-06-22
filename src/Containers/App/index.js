import React, { Component } from 'react';
import './App.css';
import StateList from '../../Components/StateList';
import CardContainer from '../CardContainer';

function App() {
  return (
    <div className="App">
      <div className="App-header-container">
        <h1>Track My States</h1>
      </div>
      <StateList />
      <CardContainer />
      <div className="App-footer-container">
        <h3>App Footer</h3>
      </div>
    </div>
  );
}

export default App;
