export const getRandomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;

export const isEven = num => num % 2 === 0;

export const times = (n, func) => {
  const result = [];
  for (let i = 0; i < n; i += 1) {
    result.push(func());
  }
  return result;
};


export const immutableSort = (list) => {
  const left = (x, rest) => rest.filter(val => val <= x);
  const right = (x, rest) => rest.filter(val => val > x);
  const sort = (x, rest) => [].concat(
    immutableSort(left(x, rest)), [x], immutableSort(right(x, rest)),
  );

  return !list.length ? [] : sort(list[0], list.slice(1));
};
