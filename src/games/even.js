import { cons } from 'hexlet-pairs';
import game from '..';
import isEven from '../isEven';
import randomInt from '../randomInt';

const message = 'Answer "yes" if number even otherwise answer "no".\n';
const question = () => randomInt(1, 100);
const answer = number => (isEven(number) ? 'yes' : 'no');

const gamePass = () => {
  const quest = question();
  const answ = answer(quest);
  return cons(quest, answ);
};

export default count => game(gamePass, message, count);
