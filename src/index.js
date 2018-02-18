import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const lineEnding = '\n';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!${lineEnding}`);
  return name;
};

const showRules = message => (message ? console.log(message, lineEnding) : null);

const endMessage = name => console.log(`Congratulations, ${name}!`);

export default (gamePass, message, quantity = 3) => {
  console.log(`${lineEnding}Welcome to the Brain Games!`);
  showRules(message);
  const name = getName();

  const iter = (count) => {
    if (count === 0) {
      return endMessage(name);
    }
    const gameIter = gamePass();
    const question = car(gameIter);
    const correct = cdr(gameIter).toString();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correct) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. correct answer was ${correct}.`);
      console.log(`Let's try again, ${name}!`);
      return null;
    }

    return iter(count - 1);
  };

  if (gamePass) {
    return iter(quantity);
  }
  return null;
};
