import readlineSync from 'readline-sync';
import { game, messageByType } from './games/game';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export default (type, count) => {
  console.log('\nWelcome to the Brain Games!');
  // const message = messageByType(type);
  const name = getName();

  if (count > 0) {
    return game(name, type, count);
  }

  return null;
};
