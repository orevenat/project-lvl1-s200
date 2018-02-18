import { cons } from 'hexlet-pairs';
import game from '..';
import randomInt from '../randomInt';
import balance from '../balance';

const message = 'Balance the given number.';
const question = () => randomInt(10, 99);
const answer = number => balance(number.toString());

const gamePass = () => {
  const quest = question();
  const answ = answer(quest);
  return cons(quest, answ);
};

const gameStart = (count = 3) => game(gamePass, message, count);
export default gameStart;
