import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain('First name is required');
  });

  test('should return an error if first name is too short', () => {
    const errors = formValidator('K', 'Doe', 30);
    expect(errors).toContain('First name is required');
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name is required');
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });

  test('should return empty array', () => {
    const errors = formValidator('John', 'Doe', 10);
    expect(errors).toHaveLength(0);
  });

  test('should return empty errors array - Short name ', () => {
    const errors = formValidator('John', 'De', 10);
    expect(errors).toHaveLength(0);
  });

  test('should throw error when age is not a number ', () => {
    expect(() => formValidator('John', 'De', '10' as any)).toThrowError();
  });
});
