export type validateNumbersMethod = (input: number) => boolean;
export type validateStringMethod = (input: string) => boolean;

const isEven = (input: number) => {
  return input % 2 === 0;
};

const isGreatenThan = (boundary: number): validateNumbersMethod => {
  return (input: number) => input > boundary;
};

const isLowerThan = (boundary: number): validateNumbersMethod => {
  return (input: number) => input < boundary;
};

export const isValidInteger: validateStringMethod = (input: string) => {
  return input != '' && Number.isInteger(Number(input));
};

export const numberValidators: validateNumbersMethod[] = [
  isEven,
  isGreatenThan(0),
  isLowerThan(100),
];
