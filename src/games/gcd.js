import { getRandomInt, isEven } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

export const gcdBinary = (m, n) => {
  if (m === 0) return n;
  if (n === 0) return m;
  if (m === n) return m;
  if (m === 1 || n === 1) return 1;
  if (isEven(m) && isEven(n)) return 2 * gcdBinary(m / 2, n / 2);
  if (isEven(m)) return gcdBinary(m / 2, n);
  if (isEven(n)) return gcdBinary(m, n / 2);
  if (n > m) return gcdBinary((n - m) / 2, m);
  return gcdBinary((m - n) / 2, n);
};

export const gcd = (m, n) => {
  if (m === 0) return n;
  if (n === 0) return m;

  const iter = (currDivider) => {
    if (m % currDivider === 0 && n % currDivider === 0) {
      return currDivider;
    }
    return iter(currDivider - 1);
  };

  return iter(m < n ? m : n);
};

const run = () => {
  const x = getRandomInt(0, 100);
  const y = getRandomInt(0, 100);

  return {
    correctAnswer: gcd(x, y).toString(),
    question: `${x} ${y}`,
  };
};

export default {
  description,
  run,
};
