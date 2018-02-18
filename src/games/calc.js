import { cons } from 'hexlet-pairs';
import game from '..';
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

const gamePass = () => {
  const num1 = randomInt(1, 10);
  const num2 = randomInt(1, 5);
  const operation = randomOperation();
  const quest = question(num1, num2, operation);
  const answ = answer(num1, num2, operation);
  return cons(quest, answ);
};

export default count => game(gamePass, message, count);
