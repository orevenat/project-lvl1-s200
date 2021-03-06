import { cons } from 'hexlet-pairs';
import game from '..';
import isPrime from '../isPrime';
import randomInt from '../randomInt';

const message = 'Is this number prime?';
const question = number => number;
const answer = number => (isPrime(number) ? 'yes' : 'no');

const gamePass = () => {
  const number = randomInt(1, 100);
  const quest = question(number);
  const answ = answer(number);
  return cons(quest, answ);
};

const gameStart = (count = 3) => game(gamePass, message, count);
export default gameStart;
