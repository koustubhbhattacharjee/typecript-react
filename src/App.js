
import './App.css';
import React, { Component } from 'react';
import Greet from './Components/greet'
import Welcome from './Components/greetClass';
import Hello from './Components/Hello'
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import EventBind from './Components/EventBind';
//import Message from './Components/message';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <EventBind/>
        {/* <Counter/> */}
          {/* <Greet name="bhott"> */}
            {/* <p> This is children Props </p> */}
          {/* </Greet> */}
          {/* <Greet name="bhott">
            <p> This is children Props </p>
          </Greet>
          <Greet name="man">
            <button>Click</button>
          </Greet>
          <Welcome name="Clark"/>
          <Welcome name= "wooh"/>
          <Welcome name="man"/>
          <Hello/> */}
          {/* <Welcome name="bruh"/> */}
          {/* <FunctionClick/> */}
      </div>
    )
  }
}

export default App;
