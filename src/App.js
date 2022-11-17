import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicTacToe from './TicTacToe';
import Home from './Home';
import BullsAndCowspg from './BullsAndCows';
import GuessNumpg from './GuessNum';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bullsandcows" element={<BullsAndCowspg />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/guessnum" element={<GuessNumpg />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
