import { cons } from 'hexlet-pairs';
import randomInt from '../randomInt';
import randomOperation from '../randomOperation';

const message = 'What is the result of the expression?\n';

const question = (num1, num2, operation) => `${num1} ${operation} ${num2}`;

const answer = (num1, num2, operation) => {
  let result;
  if (operation === '+') {
    result = num1 + num2;
  } else if (operation === '-') {
    result = num1 - num2;
  } else {
    result = num1 * num2;
  }
  return result;
};

export default () => {
  const num1 = randomInt(1, 70);
  const num2 = randomInt(1, 30);
  const operation = randomOperation();
  const quest = question(num1, num2, operation);
  const answ = answer(num1, num2, operation);
  return cons(quest, answ);
};
