import runGame from '../runGame';
import { getRandomInt } from '../utils';

const description = 'What is the result of the expression?';
const operations = [
  { literal: '-', func: (x, y) => x - y },
  { literal: '+', func: (x, y) => x + y },
  { literal: '*', func: (x, y) => x * y },
];

const pickOne = list => list[getRandomInt(0, list.length - 1)];

const calc = () => {
  const x = getRandomInt(0, 100);
  const y = getRandomInt(0, 100);
  const operation = pickOne(operations);
  const question = `${x} ${operation.literal} ${y}`;
  const correctAnswer = operation.func(x, y).toString();
  return { question, correctAnswer };
};

export default () => runGame({ makeGameData: calc, description });
