import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'BibleMan'
  }

  // function syntax to be used for event handlers
  // A property which is assigned a function
  // This will encapsulate the this keyword to refer to the class at runtime
  // this.setState() will merge whatever you pass it with state
  inputChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
      <UserInput changed={this.inputChangedHandler}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName="Gabriel"/>
      </div>
    );
  }
}

export default App;
