import React from 'react';
import { useNavigate } from 'react-router-dom';

function Wordlepg() {
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
      value: '',
      numOfTriesRemaining: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <section>
          <h1>Wordle</h1>
          <h3>Guess a Five Letter Word</h3>
          <div id="guessInput1">
            Guess 1:{' '}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div id="guessInput2">
            Guess 2:{' '}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div id="guessInput3">
            Guess 3:{' '}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div id="guessInput4">
            Guess 4:{' '}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div id="guessInput5">
            Guess 5:{' '}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div id="guessInput6">
            Guess 6:{' '}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </section>
      );
  }
}
export default Wordlepg;