/* eslint-disable react/prefer-stateless-function */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
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
      <button type="button" className="AC" onClick={handler}>AC</button>
      <button type="button" onClick={handler}>&plusmn;</button>
      <button type="button" onClick={handler}>%</button>
      <button type="button" onClick={handler}>&divide;</button>
      <button type="button" onClick={handler}>7</button>
      <button type="button" onClick={handler}>8</button>
      <button type="button" onClick={handler}>9</button>
      <button type="button" onClick={handler}>&#215;</button>
      <button type="button" onClick={handler}>4</button>
      <button type="button" onClick={handler}>5</button>
      <button type="button" onClick={handler}>6</button>
      <button type="button" onClick={handler}>&minus;</button>
      <button type="button" onClick={handler}>1</button>
      <button type="button" onClick={handler}>2</button>
      <button type="button" onClick={handler}>3</button>
      <button type="button" onClick={handler}>+</button>
      <button type="button" className="span-two" onClick={handler}>0</button>
      <button type="button" onClick={handler}>.</button>
      <button type="button" className="equals" onClick={handler}>=</button>
    </div>
  );
};

KeyBoard.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default Calculator;
