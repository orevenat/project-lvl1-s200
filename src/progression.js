const progression = (start, increment, hidden, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr[i] = start + (increment * i);
  }
  arr[hidden] = '..';

  return arr;
};

export default progression;
