import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import even from './even';
import calc from './calc';
import gcd from './gcd';

export const getByType = (type) => {
  switch (type) {
    case 'even':
      return even();
    case 'calc':
      return calc();
    case 'gcd':
      return gcd();
    default:
      return null;
  }
};

export const messageByType = (type) => {
  switch (type) {
    case 'even':
      return 'Answer "yes" if number even otherwise answer "no".\n';
    case 'calc':
      return 'What is the result of the expression?\n';
    case 'gcd':
      return 'Find the greatest common divisor of given numbers.\n';
    default:
      return null;
  }
};

export const game = (name, type, count) => {
  if (count > 0) {
    const iteration = getByType(type);
    const question = car(iteration);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correct = cdr(iteration).toString();
    if (answer === correct) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. correct answer was ${correct}.`);
      console.log(`Let's try again, ${name}!`);
      return null;
    }

    return game(name, type, count - 1);
  }

  console.log(`Congratulations, ${name}!`);
  return null;
};
