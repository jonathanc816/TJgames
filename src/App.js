import './App.css';
import React, { Component } from "react";
import { generateSecret, getHint } from "./games/BullsAndCowsFunction"
// import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div>
      <BullsAndCows/>
    </div>
  );
}

class BullsAndCows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: generateSecret(4),
      value: '' 
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <section>
        <div id="numDigit"> <h1>Number of digit is: 4</h1></div>
        <div id="guessInput">Enter a Number: <input type="text" value={this.state.value} onChange={this.handleChange} /></div>
        <div id="guess"><button onClick={() =>{console.log(getHint(this.state.secret, this.state.value))}}>Guess</button></div>
      </section>

    )
  }
}
export default App;