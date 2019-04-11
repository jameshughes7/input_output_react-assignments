import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  render() {
    return (
      <div className="App">
      <UserInput/>
      <UserOutput userName="James"/>
      <UserOutput userName="Caryn"/>
      <UserOutput userName="Isabella"/>
      <UserOutput userName="Gabriel"/>
      </div>
    );
  }
}

export default App;
