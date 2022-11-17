import React from 'react';
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
    this.state = { target: nG[0], value: 0, range: [0, nG[1]], turns: 7 };
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
          <h2>
            The range is: {this.state.range[0]} to {this.state.range[1]}
            Turns left: {this.state.turns}
          </h2>
        </div>
        <div>
          <input
            id="guess"
            type="number"
            min="0"
            max="100"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button
            onClick={() => {
              console.log(left, right);
              this.state.range = numrange(
                left,
                right,
                this.state.target,
                this.state.value
              );
              this.state.turns -= 1;
              if (this.state.turns == 0) {
                if (this.state.range != true) {
                  alert();
                }
              }
              console.log(this.state.range);
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
