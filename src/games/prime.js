import { cons } from 'hexlet-pairs';
import game from '..';
import isPrime from '../isPrime';
import randomInt from '../randomInt';

const questMessage = 'Is this number prime?';
const question = number => number;
const answer = number => (isPrime(number) ? 'yes' : 'no');

const gamePass = () => {
  const number = randomInt(1, 100);
  const quest = question(number);
  const answ = answer(number);
  return cons(cons(quest, questMessage), answ);
};

const gameStart = (count = 3) => game(gamePass, count);
export default gameStart;
