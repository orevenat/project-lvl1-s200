import { cons } from 'hexlet-pairs';
import isEven from '../isEven';
import randomInt from '../randomInt';

const message = 'Answer "yes" if number even otherwise answer "no".\n';
const question = () => randomInt(1, 100);

const answer = number => (isEven(number) ? 'yes' : 'no');

export default () => {
  const quest = question();
  const answ = answer(quest);
  return cons(quest, answ);
};