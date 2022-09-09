/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      operation: null,
      total: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

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
      <button type="button" className="key AC" style={{ gridArea: 'AC' }} onClick={this.clickHandler}>AC</button>
      <button type="button" className="key" style={{ gridArea: 'plusmin' }} onClick={this.clickHandler}>&plusmn;</button>
      <button type="button" className="key" style={{ gridArea: 'percent' }} onClick={this.clickHandler}>%</button>
      <button type="button" className="key" style={{ gridArea: 'seven' }} onClick={this.clickHandler}>7</button>
      <button type="button" className="key" style={{ gridArea: 'eight' }} onClick={this.clickHandler}>8</button>
      <button type="button" className="key" style={{ gridArea: 'nine' }} onClick={this.clickHandler}>9</button>
      <button type="button" className="key" style={{ gridArea: 'four' }} onClick={this.clickHandler}>4</button>
      <button type="button" className="key" style={{ gridArea: 'five' }} onClick={this.clickHandler}>5</button>
      <button type="button" className="key" style={{ gridArea: 'six' }} onClick={this.clickHandler}>6</button>
      <button type="button" className="key" style={{ gridArea: 'one' }} onClick={this.clickHandler}>1</button>
      <button type="button" className="key" style={{ gridArea: 'two' }} onClick={this.clickHandler}>2</button>
      <button type="button" className="key" style={{ gridArea: 'three' }} onClick={this.clickHandler}>3</button>
      <button type="button" className="key" style={{ gridArea: 'zero' }} onClick={this.clickHandler}>0</button>
      <button type="button" className="key" style={{ gridArea: 'decimal' }} onClick={this.clickHandler}>.</button>
      <button type="button" className="key operator" style={{ gridArea: 'equals' }} onClick={this.clickHandler}>=</button>
      <button type="button" className="key operator" style={{ gridArea: 'div' }} onClick={this.clickHandler}>&divide;</button>
      <button type="button" className="key operator" style={{ gridArea: 'mult' }} onClick={this.clickHandler}>&times;</button>
      <button type="button" className="key operator" style={{ gridArea: 'minus' }} onClick={this.clickHandler}>&minus;</button>
      <button type="button" className="key operator" style={{ gridArea: 'plus' }} onClick={this.clickHandler}>+</button>
    </div>
  );
};
