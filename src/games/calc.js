
const description = 'What is the result of the expression?';
const operations = [
  { literal: '-', func: (x, y) => x - y },
  { literal: '+', func: (x, y) => x + y },
  { literal: '*', func: (x, y) => x * y },
];

const getRandomInt = () => Math.round(Math.random() * 100);

const pickOne = list => list[Math.floor(Math.random() * list.length)];

const calc = () => {
  const x = getRandomInt();
  const y = getRandomInt();
  const operation = pickOne(operations);
  const question = `${x} ${operation.literal} ${y}`;
  const correctAnswer = operation.func(x, y).toString();
  return { question, correctAnswer };
};

export default {
  run: calc,
  description,
};
