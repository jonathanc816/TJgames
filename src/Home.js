import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate('/bullsandcows');
        }}
      >
        Bulls and Cows
      </button>
      <button
        onClick={() => {
          navigate('/tictaetoe');
        }}
      >
        TicTacToe
      </button>
    </div>
  );
}
export default Home;
