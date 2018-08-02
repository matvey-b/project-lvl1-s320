import runGame from '../runGame';
import { getRandomInt } from '../utils';

const progressionLen = 10;
const description = 'What number is missing in this progression?';

const makeProgression = (len) => {
  const step = getRandomInt(1, 5);
  const startElement = getRandomInt(1, 50);
  const progression = [startElement];
  for (let i = 1; i < len; i += 1) {
    progression.push(startElement + step * i);
  }
  return progression;
};

const makeGameData = () => {
  const progression = makeProgression(progressionLen);
  const hiddenElementIdx = getRandomInt(0, progressionLen - 1);
  const correctAnswer = progression[hiddenElementIdx].toString();
  progression[hiddenElementIdx] = '..';
  const question = progression.toString();
  return {
    question,
    correctAnswer,
  };
};

export default () => runGame({ makeGameData, description });
