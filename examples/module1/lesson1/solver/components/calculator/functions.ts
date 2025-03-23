import type { CalculationResult } from './types';

export const add = (value: number, value2: number): CalculationResult => {
  return {
    value: value + value2,
  };
};
export const substract = (value: number, value2: number) => {
  return {
    value: value - value2,
  };
};
export const multiply = (value: number, value2: number) => {
  return {
    value: value * value2,
  };
};
export const divide = (value: number, value2: number) => {
  return {
    value: value / value2,
    error: value2 === 0 ? 'Cannot divide by zero' : undefined,
  };
};
