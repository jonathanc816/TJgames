import React from 'react';
import { useNavigate } from 'react-router-dom';

function TicTacToe() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>TicTacToe</h1>
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
export default TicTacToe;
