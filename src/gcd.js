export default (num1, num2) => {
  const iter = (num, acc) => {
    if (num >= num1 && num >= num2) {
      return acc;
    }
    const newAcc = (num1 % num === 0 && num2 % num === 0) ? num : acc;

    return iter(num + 1, newAcc);
  };

  return iter(2, 1);
};
