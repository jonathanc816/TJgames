import './App.css';
import React, { Component } from 'react';
import BullsAndCowspg from './BullsAndCows';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicTacToe from './TicTacToe';
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bullsandcows" element={<BullsAndCowspg />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
