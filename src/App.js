import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'BibleMan',
    nickNames: ['WizzBanger', 'Slapdash', 'Hopscotch']
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
      <UserInput 
      changed={this.inputChangedHandler}
      currentName={this.state.username}/>
      <UserOutput userName={this.state.username} nickName ={this.state.username + ' ' + this.state.nickNames[0]}/>
      <UserOutput userName={this.state.username} nickName ={this.state.username + ' ' + this.state.nickNames[1]}/>
      <UserOutput userName={this.state.username} nickName ={this.state.username + ' ' + this.state.nickNames[2]}/>
      <UserOutput userName="Gabriel"/>
      </div>
    );
  }
}

export default App;
