import runGame from '../runGame';
import { getRandomInt } from '../utils';

const description = 'Is this number prime?';

export const isPrime = (x) => {
  if (x <= 1) return false;
  const iter = num => (x % num === 0 ? num : iter(num + 1));
  return iter(2) === x;
};

const makeGameData = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runGame({ makeGameData, description });
