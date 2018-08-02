import runGame from '../runGame';
import { getRandomInt, isEven } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const makeGameData = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runGame({ makeGameData, description });
