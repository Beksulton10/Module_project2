import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lyaut from './Lyaut'; 

export default function App() {
  return (
    <Router>
      <Lyaut />
      <Routes>
      </Routes>
    </Router>
  );
}