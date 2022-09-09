/* eslint-disable react/prefer-stateless-function */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     next: null,
  //     operation: null,
  //     total: null,
  //   };
  //   this.clickHandler = this.clickHandler.bind(this);
  // }
  const [state, SetState] = useState({});

  const clickHandler = (e) => {
    SetState(calculate(state, e.target.textContent));
  };

  const { total, next, operation } = state;

  return (
    <div className="calcu">
      <p className="display">
        {total}
        {operation}
        {next}
      </p>
      <KeyBoard handler={clickHandler} />
    </div>
  );
};

const KeyBoard = (props) => {
  const { handler } = props;
  return (
    <div className="keyboard">
      <button type="button" className="key AC" style={{ gridArea: 'AC' }} onClick={handler}>AC</button>
      <button type="button" className="key" style={{ gridArea: 'plusmin' }} onClick={handler}>&plusmn;</button>
      <button type="button" className="key" style={{ gridArea: 'percent' }} onClick={handler}>%</button>
      <button type="button" className="key" style={{ gridArea: 'seven' }} onClick={handler}>7</button>
      <button type="button" className="key" style={{ gridArea: 'eight' }} onClick={handler}>8</button>
      <button type="button" className="key" style={{ gridArea: 'nine' }} onClick={handler}>9</button>
      <button type="button" className="key" style={{ gridArea: 'four' }} onClick={handler}>4</button>
      <button type="button" className="key" style={{ gridArea: 'five' }} onClick={handler}>5</button>
      <button type="button" className="key" style={{ gridArea: 'six' }} onClick={handler}>6</button>
      <button type="button" className="key" style={{ gridArea: 'one' }} onClick={handler}>1</button>
      <button type="button" className="key" style={{ gridArea: 'two' }} onClick={handler}>2</button>
      <button type="button" className="key" style={{ gridArea: 'three' }} onClick={handler}>3</button>
      <button type="button" className="key" style={{ gridArea: 'zero' }} onClick={handler}>0</button>
      <button type="button" className="key" style={{ gridArea: 'decimal' }} onClick={handler}>.</button>
      <button type="button" className="key operator" style={{ gridArea: 'equals' }} onClick={handler}>=</button>
      <button type="button" className="key operator" style={{ gridArea: 'div' }} onClick={handler}>&divide;</button>
      <button type="button" className="key operator" style={{ gridArea: 'mult' }} onClick={handler}>&#215;</button>
      <button type="button" className="key operator" style={{ gridArea: 'minus' }} onClick={handler}>&minus;</button>
      <button type="button" className="key operator" style={{ gridArea: 'plus' }} onClick={handler}>+</button>
    </div>
  );
};

KeyBoard.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default Calculator;
