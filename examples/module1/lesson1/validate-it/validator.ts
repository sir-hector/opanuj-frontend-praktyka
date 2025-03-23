import { CORRECT_INPUT, INVALID_INPUT, INVALID_INTEGER } from './messages';
import { isValidInteger } from './methods';

type validateNumbersMethod = (input: number) => boolean;

export function validate(
  input: string,
  validatorsMethod: validateNumbersMethod[]
): string {
  if (!isValidInteger(input)) {
    return INVALID_INPUT;
  }
  const isValidRangeInteger = validatorsMethod.every((validateFn) =>
    validateFn(Number(input))
  );

  if (!isValidRangeInteger) {
    return INVALID_INTEGER;
  }

  return CORRECT_INPUT;
}
