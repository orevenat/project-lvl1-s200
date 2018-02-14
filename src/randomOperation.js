export default () => {
  const randNumber = Math.random();
  let operation;
  if (randNumber < 0.33) {
    operation = '+';
  } else if (randNumber >= 0.33 && randNumber < 0.66) {
    operation = '-';
  } else {
    operation = '*';
  }
  return operation;
};
