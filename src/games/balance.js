import { cons } from 'hexlet-pairs';
import game from '..';
import randomInt from '../randomInt';
import balance from '../balance';

const message = 'Balance the given number.';
const questMessage = 'Question:';

const question = () => randomInt(10, 99);
const answer = number => balance(number.toString());

const gamePass = () => {
  const quest = question();
  const answ = answer(quest);
  return cons(cons(quest, questMessage), answ);
};

const gameStart = (count = 3) => game(gamePass, count, message);
export default gameStart;
