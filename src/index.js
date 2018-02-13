import readlineSync from 'readline-sync';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const evenGame = (name) => {
  const iter = (count) => {
    if (count > 0) {
      const number = getRandomInt(1, 100);
      const answer = readlineSync.question(`Question: ${number}`);
      const correct = isEven(number) ? 'yes' : 'no';
      if (answer === correct) {
        console.log('Correct!');
        return(iter(count - 1));
      } else {
        const incorrect = isEven(number) ? 'no' : 'yes';
        console.log(`'${incorrect}' is wrong answer ;(. correct answer was '${correct}'.`);
        console.log('Let\'s try again, Bill!');
        return;
      }
    }

    console.log(`Congratulations, ${name}!`);
    return;
  };

  return iter(3);
};

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
