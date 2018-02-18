const balance = (num) => {
  const arr = num.split('');
  arr.sort();
  const first = parseInt(arr[0], 10);
  const last = parseInt(arr[arr.length - 1], 10);
  if (last - first <= 1) {
    return arr.join('');
  }
  arr[0] = (first + 1).toString();
  arr[arr.length - 1] = (last - 1).toString();
  return balance(arr.join(''));
};

export default balance;
