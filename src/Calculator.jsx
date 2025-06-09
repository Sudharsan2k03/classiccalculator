import React, { useState} from 'react';
import { getFactByNumber } from './facts';
import './App.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [fact, setFact] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', 'C', '+',
  ];

  // Handle button click
  const handleButtonClick = (value) => {
    if (value === 'C') {
      setExpression('');
      setResult(null);
      setFact('');
    } else {
      setExpression((prev) => prev + value);
    }
  };

  // Calculate result
  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(expression);
      if (evalResult === undefined) {
        setResult(null);
        setFact('');
        return;
      }
      const roundedResult = Math.round(evalResult * 100000) / 100000;
      setResult(roundedResult);
      setFact(getFactByNumber(roundedResult));
      setExpression(roundedResult.toString());
    } catch {
      setResult('Error');
      setFact('Invalid expression!');
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`calc-container ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="calc-title">Classic Fun Fact Calculator</h2>

      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="calc-display" aria-live="polite">
        {expression || '0'}
      </div>

      <div className="calc-buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`calc-btn ${btn === 'C' ? 'clear-btn' : ''}`}
            onClick={() => handleButtonClick(btn)}
            aria-label={`Button ${btn}`}
          >
            {btn}
          </button>
        ))}
        <button
          className="calc-btn equal-btn"
          onClick={calculateResult}
          aria-label="Equals"
        >
          =
        </button>
      </div>

      {result !== null && (
        <div className="calc-result" role="region" aria-live="polite">
          <p>
            Result: <strong>{result}</strong>
          </p>
          <p>
            Fun Fact: <em>{fact}</em>
          </p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
