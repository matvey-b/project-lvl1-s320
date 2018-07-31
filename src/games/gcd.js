import { getRandomInt, isEven } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

/**
@link https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%B2%D1%8B%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%9D%D0%9E%D0%94
НОД(0, n) = n; НОД(m, 0) = m; НОД(m, m) = m;
НОД(1, n) = 1; НОД(m, 1) = 1;
Если m, n чётные, то НОД(m, n) = 2*НОД(m/2, n/2);
Если m чётное, n нечётное, то НОД(m, n) = НОД(m/2, n);
Если n чётное, m нечётное, то НОД(m, n) = НОД(m, n/2);
Если m, n нечётные и n > m, то НОД(m, n) = НОД((n-m)/2, m);
Если m, n нечётные и n < m, то НОД(m, n) = НОД((m-n)/2, n);
*/
const gcd = (m, n) => {
  if (m === 0) return n;
  if (n === 0) return m;
  if (m === n) return m;
  if (m === 1 || n === 1) return 1;
  if (isEven(m) && isEven(n)) return 2 * gcd(m / 2, n / 2);
  if (isEven(m)) return gcd(m / 2, n);
  if (isEven(n)) return gcd(m, n / 2);
  if (n > m) return gcd((n - m) / 2, m);
  return gcd((m - n) / 2, n);
};

const run = () => {
  const x = getRandomInt();
  const y = getRandomInt();

  return {
    correctAnswer: gcd(x, y).toString(),
    question: `${x} ${y}`,
  };
};

export default {
  description,
  run,
};
