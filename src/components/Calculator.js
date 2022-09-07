/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calcu">
        <p className="display">69420</p>
        <KeyBoard />
      </div>
    );
  }
}

// eslint-disable-next-line arrow-body-style
const KeyBoard = () => {
  return (
    <div className="keyboard">
      <button type="button" className="key AC" style={{ gridArea: 'AC' }}>AC</button>
      <button type="button" className="key" style={{ gridArea: 'plusmin' }}>&plusmn;</button>
      <button type="button" className="key" style={{ gridArea: 'percent' }}>%</button>
      <button type="button" className="key" style={{ gridArea: 'seven' }}>7</button>
      <button type="button" className="key" style={{ gridArea: 'eight' }}>8</button>
      <button type="button" className="key" style={{ gridArea: 'nine' }}>9</button>
      <button type="button" className="key" style={{ gridArea: 'four' }}>4</button>
      <button type="button" className="key" style={{ gridArea: 'five' }}>5</button>
      <button type="button" className="key" style={{ gridArea: 'six' }}>6</button>
      <button type="button" className="key" style={{ gridArea: 'one' }}>1</button>
      <button type="button" className="key" style={{ gridArea: 'two' }}>2</button>
      <button type="button" className="key" style={{ gridArea: 'three' }}>3</button>
      <button type="button" className="key" style={{ gridArea: 'zero' }}>0</button>
      <button type="button" className="key" style={{ gridArea: 'decimal' }}>.</button>
      <button type="button" className="key operator" style={{ gridArea: 'equals' }}>=</button>
      <button type="button" className="key operator" style={{ gridArea: 'div' }}>&divide;</button>
      <button type="button" className="key operator" style={{ gridArea: 'mult' }}>&times;</button>
      <button type="button" className="key operator" style={{ gridArea: 'minus' }}>&minus;</button>
      <button type="button" className="key operator" style={{ gridArea: 'plus' }}>+</button>
    </div>
  );
};
