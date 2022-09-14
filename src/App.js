import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<QuotePage />} />
    </Routes>
  </>
);

export default App;
