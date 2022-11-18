import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div class="selections">
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
          navigate('/wordle');
        }}
      >
        Wordle
      </button>
    </div>
  );
}
export default Home;
