export const getRandomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;

export const isEven = num => num % 2 === 0;

export const times = (n, func) => {
  const result = [];
  for (let i = 0; i < n; i += 1) {
    result.push(func());
  }
  return result;
};
