import { getRandomInt, isEven } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const even = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default {
  run: even,
  description,
};
