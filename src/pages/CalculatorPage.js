import React from 'react';
import Calculator from '../components/Calculator';
import './CalculatorPage.css';

const CalculatorPage = () => (
  <div className="calculator-page">
    <h1 className="title">Let&#39;s do some math!</h1>
    <div className="App"><Calculator /></div>
  </div>
);

export default CalculatorPage;
