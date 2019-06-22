import React, { Component } from 'react';
import './App.css';
import StateList from '../../Components/StateList';
import CardContainer from '../CardContainer';
import MapComponent from '../../Components/MapComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usStates: []
    }

  }

  showCards = () => {
    this.setState({ usStates: ['Colorado', 'California', 'Nebraska', 'Idaho']})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header-container">
          <h1>Track My States</h1>
          <button 
            className="temp-get-states"
            onClick={this.showCards}
           >Click to get state cards
          </button>
        </div>
        <StateList />
        <CardContainer usStates={this.state.usStates}/>
        <MapComponent />
        <div className="App-footer-container">
          <h3>App Footer</h3>
        </div>
      </div>
    ); 
  }
}

export default App;
