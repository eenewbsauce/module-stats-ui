import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleContainer from './components/PeopleContainer'
import ModuleList from './components/ModuleList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to EENEWBSAUCE Module Stats</h2>
        </div>
       <ModuleList />
      </div>
    );
  }
}

export default App;
