import React from 'react';
import { useNavigate } from 'react-router-dom';
import { generateSecretWord, guessingSecretWord } from './games/WordleFunction';

function Wordlepg() {
  const navigate = useNavigate();
  
  return (
    <div>
      <Wordle />
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


class Wordle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      numOfTriesRemaining: 6,
      secretWord: generateSecretWord(),
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
              id="guess5"
              // value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div id="guessInput2">
            Guess 2:{' '}
            <input
              type="text"
              id="guess4"
              onChange={this.handleChange}
            />
          </div>
          <div id="guessInput3">
            Guess 3:{' '}
            <input
              type="text"
              id="guess3"
              onChange={this.handleChange}
            />
          </div>
          <div id="guessInput4">
            Guess 4:{' '}
            <input
              type="text"
              id="guess2"
              onChange={this.handleChange}
            />
          </div>
          <div id="guessInput5">
            Guess 5:{' '}
            <input
              type="text"
              id="guess1"
              onChange={this.handleChange}
            />
          </div>
          <div id="guessInput6">
            Guess 6:{' '}
            <input
              type="text"
              id="guess0"
              onChange={this.handleChange}
            />
          </div>
          <button
            onClick={() => {
              this.state.numOfTriesRemaining = guessingSecretWord(this.state.numOfTriesRemaining, this.state.secretWord, this.state.value);
              console.log(this.state.numOfTriesRemaining);
              document.getElementById(`guess${this.state.numOfTriesRemaining}`).disabled = true;
            }}
          >
            Guess
          </button>
        <button
            onClick={() => {
              console.log(this.state.secretWord);
            }}
          >
            Button
          </button>
        </section>
      );
  }
}
export default Wordlepg;