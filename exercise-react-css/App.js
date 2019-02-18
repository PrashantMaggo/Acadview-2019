import React, { Component } from 'react';
import Display from './Display';
import './app.css';
class App extends Component {
  render() {
    return (
        <div>
        <div id="head">
        <h1>Contact Information</h1>
        </div>
      <div className="App">
        <Display name="john" age="28" dob="january 19"/>
      </div>
        <div className="App1">
        <Display name="wick" age="30" dob="december 20"/>
        </div>
        <div className="App2">
        <Display name="rock" age="55" dob="october 12"/>
        </div>
        </div>
        
    );
  }
}

export default App;
