import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { numGenerator, numrange } from './games/GuessNumFunction';

function GuessNumpg() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Guess the number</h1>
      <GuessNum />
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

class GuessNum extends React.Component {
  constructor(props) {
    super(props);
    let nG = numGenerator(3);
    this.state = { target: nG[0], value: 0, range: [1, nG[1]], turns: 7 };
    this.handleChange = this.handleChange.bind(this);
    console.log(this.state.target, this.state.range);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    let left = this.state.range[0];
    let right = this.state.range[1];
    return (
      <section>
        <div>
          <h2 id="range">
            The range is: {this.state.range[0]} to {this.state.range[1]}
          </h2>
          <h2 id="turns">Turns left: {this.state.turns}</h2>
        </div>
        <div>
          <input
            id="guess"
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button
            onClick={() => {
              this.state.range = numrange(
                left,
                right,
                this.state.target,
                this.state.value
              );
              this.state.turns -= 1;
              document.getElementById('turns').innerHTML =
                'Turns left: ' + this.state.turns;
              document.getElementById('range').innerHTML =
                'The range is: ' +
                this.state.range[0] +
                ' to ' +
                this.state.range[1];
              if (this.state.turns == 0 && this.state.range != true) {
                alert('You fail!');
              }
            }}
          >
            Guess it!
          </button>
        </div>
      </section>
    );
  }
}
export default GuessNumpg;
