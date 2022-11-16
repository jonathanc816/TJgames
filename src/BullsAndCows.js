import { generateSecret, getHint } from './games/BullsAndCowsFunction';
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
function BullsAndCowspg() {
  const navigate = useNavigate();
  return (
    <div>
      <BullsAndCows />
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Exit
      </button>
    </div>
  );
}
class BullsAndCows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: generateSecret(4),
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <section>
        <div id="numDigit">
          {' '}
          <h1>Number of digit is: 4</h1>
        </div>
        <div id="guessInput">
          Enter a Number:{' '}
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div id="guess">
          <button
            onClick={() => {
              console.log(getHint(this.state.secret, this.state.value));
            }}
          >
            Guess
          </button>
        </div>
      </section>
    );
  }
}

export default BullsAndCowspg;
