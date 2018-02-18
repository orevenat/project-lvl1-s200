import { cons } from 'hexlet-pairs';
import game from '..';
import randomInt from '../randomInt';
import progression from '../progression';

const message = 'What number is missing in this progression?';

const question = (start, increment, hidden, length) => progression(start, increment, hidden, length).join(' ');
const answer = (start, increment, hidden) => start + (hidden * increment);

const gamePass = () => {
  const startNumber = randomInt(3, 10);
  const hiddenNumber = randomInt(0, 9);
  const increment = randomInt(1, 10);
  const len = 10;
  const quest = question(startNumber, increment, hiddenNumber, len);
  const answ = answer(startNumber, increment, hiddenNumber);
  return cons(quest, answ);
};

const gameStart = (count = 3) => game(gamePass, count, message);
export default gameStart;
