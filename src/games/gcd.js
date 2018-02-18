import { cons } from 'hexlet-pairs';
import game from '..';
import randomInt from '../randomInt';
import gcd from '../gcd';

const message = 'Find the greatest common divisor of given numbers.';
const questMessage = 'Question:';

const question = (num1, num2) => `${num1} ${num2}`;

const answer = (num1, num2) => gcd(num1, num2);

const gamePass = () => {
  const num1 = randomInt(1, 100);
  const num2 = randomInt(1, 100);
  const quest = question(num1, num2);
  const answ = answer(num1, num2);
  return cons(cons(quest, questMessage), answ);
};

const gameStart = (count = 3) => game(gamePass, count, message);
export default gameStart;
