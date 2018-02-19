import { cons } from 'hexlet-pairs';
import game from '..';
import isEven from '../isEven';
import randomInt from '../randomInt';

const message = 'Answer "yes" if number even otherwise answer "no".';

const question = () => randomInt(1, 100);
const answer = number => (isEven(number) ? 'yes' : 'no');

const gamePass = () => {
  const quest = question();
  const answ = answer(quest);
  return cons(quest, answ);
};

const gameStart = (count = 3) => game(gamePass, message, count);
export default gameStart;
