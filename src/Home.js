import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Select a game</h1>
      <button
        onClick={() => {
          navigate('/bullsandcows');
        }}
      >
        Bulls and Cows
      </button>

      <button
        onClick={() => {
          navigate('/guessnum');
        }}
      >
        Guess the number
      </button>
      <button
        onClick={() => {
          navigate('/tictactoe');
        }}
      >
        TicTacToe
      </button>
      <button
        onClick={() => {
          navigate('/wordle');
        }}
      >
        Wordle
      </button>
    </div>
  );
}
export default Home;
