export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (typeof age !== 'number' || isNaN(age)) {
    throw new Error('Age must be a number');
  }

  if (!firstName || firstName.length < 2) {
    errors.push('First name is required');
  }

  if (!lastName || lastName.length < 2) {
    errors.push('Last name is required');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}
