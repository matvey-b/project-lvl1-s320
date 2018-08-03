import runGame from '../runGame';
import { getRandomInt } from '../utils';

const description = 'Is this number prime?';

export const isPrime = (x) => {
  if (x <= 1) return false;

  const iter = (num = x - 1) => {
    if (num <= 1) return x;
    return x % num === 0 ? false : iter(num - 1);
  };

  return iter() === x;
};

const makeGameData = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runGame({ makeGameData, description });
