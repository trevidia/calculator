import './App.css';
import Buttons from './components/Buttons';
import Screen from './components/Screen';
import React, { Component } from 'react'
import FunctionalButtons from './components/FunctionalButtons';


class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="container">
        <Screen/>
          <div className="button-container">
            <Buttons/>
            <FunctionalButtons/>
          </div>
      </div>
      );
  }
}
 
export default App;
