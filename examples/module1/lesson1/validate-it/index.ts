import { numberValidators } from './methods';
import { validate } from './validator';

function main() {
  const input: HTMLInputElement = document.querySelector('#input')!;
  const cleanButton: HTMLElement = document.querySelector('#cleanup-btn')!;
  const validationButton: HTMLElement =
    document.querySelector('#validation-btn')!;
  const result: HTMLElement = document.querySelector('#result')!;

  validationButton.addEventListener('click', () => {
    const validationMessage = validate(input.value, numberValidators);
    result.innerHTML = validationMessage;
  });

  cleanButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}
main();
