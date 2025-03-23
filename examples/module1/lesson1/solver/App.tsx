import { useState } from 'react';
import { Button } from '../_solutions/solver/calculator/Button';
import type { CalculationResult } from './components/calculator/types';
import {
  add,
  substract,
  multiply,
  divide,
} from './components/calculator/functions';

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string>('');

  const calculateResult = (
    func: (a: number, b: number) => CalculationResult
  ) => {
    const result = func(firstNumber, secondNumber);
    setResult(result.error ? 0 : result.value);
    setError(result.error || '');
  };

  const parseInputValue = (input: string): number => {
    return input === '' ? 0 : parseFloat(input);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNumber}
          onChange={(e) => setFirstNumber(parseInputValue(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNumber}
          onChange={(e) => setSecondNumber(parseInputValue(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculateResult(add)}>+</Button>
        <Button onClick={() => calculateResult(substract)}>-</Button>
        <Button onClick={() => calculateResult(multiply)}>*</Button>
        <Button onClick={() => calculateResult(divide)}>/</Button>
      </div>
      <div>Result: {result}</div>
      <p>{error}</p>
    </div>
  );
};

export default App;
